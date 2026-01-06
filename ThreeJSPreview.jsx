import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function ThreeJSPreview({ textureUrl = null, size = 300 }) {
  const mountRef = useRef();

  useEffect(() => {
    const el = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, size / size, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(size, size);
    el.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2,2,2);
    scene.add(light);
    const amb = new THREE.AmbientLight(0x333333);
    scene.add(amb);

    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshStandardMaterial({ color: 0x888888 });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    if (textureUrl) {
      const loader = new THREE.TextureLoader();
      loader.load(textureUrl, (tex) => {
        material.map = tex;
        material.needsUpdate = true;
      });
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, [textureUrl, size]);

  return <div ref={mountRef} style={{ width: size, height: size }} />;
}
