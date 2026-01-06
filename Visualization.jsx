import React from 'react';
import ThreeJSPreview from '../components/ThreeJSPreview';

export default function Visualization(){
  return (
    <div>
      <h1 className="text-2xl">Interactive Visualization</h1>
      <p className="mt-2">Preview celestial objects in 3D.</p>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <ThreeJSPreview textureUrl="https://i.imgur.com/7VbGg7v.jpg" size={400}/>
        <ThreeJSPreview textureUrl="https://i.imgur.com/Z5z0q6Z.jpg" size={400}/>
      </div>
    </div>
  );
}
