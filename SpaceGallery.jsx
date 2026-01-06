import React, { useState } from 'react';
import { CELESTIAL_SEED } from '../data/celestialSeed';
import API from '../api/api';
import { Link } from 'react-router-dom';

export default function SpaceGallery(){
  const [items] = useState(CELESTIAL_SEED);

  const addFavorite = async (itemId) => {
    // call backend if user logged in
    try {
      await API.post('/users/library/favorites', { objectId: itemId });
      alert('Added to favorites (server call placeholder)');
    } catch (err) {
      console.warn(err);
      alert('Login required or server offline');
    }
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Space Gallery</h1>
      <p className="mb-3">A curated gallery of planets, stars, galaxies and nebulae. Click an item to view details or add to favorites.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map(i => (
          <div key={i.id} className="bg-gradient-to-b from-slate-800 to-slate-900 p-3 rounded shadow">
            <img src={i.media[0]} alt={i.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl mt-2">{i.name}</h3>
            <p className="text-sm opacity-75">{i.type} • {i.distance ? `${i.distance} ${i.unit}` : ''}</p>
            <div className="flex gap-2 mt-2">
              <Link to={`/explore/${i.id}`} className="px-2 py-1 bg-blue-600 rounded">Learn</Link>
              <button onClick={()=>addFavorite(i.id)} className="px-2 py-1 bg-yellow-600 rounded">Favorite</button>
              {i.id === 'milkyway' && (
                <a href="/milky-way.html" className="px-2 py-1 bg-green-600 rounded" target="_blank">Milky Way Gallery</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
