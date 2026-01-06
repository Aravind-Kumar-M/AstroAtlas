import React from 'react';
import { useParams } from 'react-router-dom';
import { CELESTIAL_SEED } from '../data/celestialSeed';

export default function Explore(){
  const { id } = useParams();
  const obj = CELESTIAL_SEED.find(x => x.id === id) || CELESTIAL_SEED[0];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl">{obj.name}</h1>
      <img src={obj.media[0]} alt={obj.name} className="mt-4 rounded w-full object-cover h-96" />
      <div className="mt-4">
        <p>{obj.description}</p>
        <ul className="mt-2">
          <li>Type: {obj.type}</li>
          <li>Distance: {obj.distance} {obj.unit}</li>
          <li>Discovery Year: {obj.discoveryYear || '—'}</li>
          <li>Tags: {obj.tags?.join(', ')}</li>
        </ul>
      </div>
    </div>
  );
}
