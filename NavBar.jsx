import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){
  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-900 to-black/80">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-xl font-bold">AstroAtlas</Link>
        <Link to="/gallery" className="px-3 py-1 rounded hover:bg-white/5">Space Gallery</Link>
        <Link to="/visualization" className="px-3 py-1 rounded hover:bg-white/5">Visualization</Link>
        <Link to="/reports" className="px-3 py-1 rounded hover:bg-white/5">Reports</Link>
      </div>
      <div className="flex items-center gap-3">
        <Link to="/user" className="px-3 py-1 rounded bg-indigo-600">User Dashboard</Link>
        <Link to="/admin" className="px-3 py-1 rounded bg-rose-600">Admin Dashboard</Link>
      </div>
    </nav>
  );
}
