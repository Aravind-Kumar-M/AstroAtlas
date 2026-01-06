import React, { useState } from 'react';
import ThreeJSPreview from '../components/ThreeJSPreview';
import ChartDashboard from '../components/ChartDashboard';
import API from '../api/api';

export default function AdminDashboard(){
  const [form, setForm] = useState({ name:'', type:'planet', description:'', tags:'' });
  const [texture, setTexture] = useState('');
  const [previewTexture, setPreviewTexture] = useState(null);

  const handleCreate = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('name', form.name);
    fd.append('type', form.type);
    fd.append('description', form.description);
    fd.append('tags', form.tags);
    if (texture) fd.append('media', texture);
    try {
      const res = await API.post('/objects', fd, { headers: {'Content-Type': 'multipart/form-data'}});
      alert('Object created');
    } catch (err) {
      console.error(err);
      alert('Error creating object');
    }
  };

  return (
    <div>
      <h1 className="text-2xl">Admin Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div className="bg-slate-800 p-4 rounded">
          <h3 className="font-bold">Add Celestial Object</h3>
          <form onSubmit={handleCreate} className="mt-3 flex flex-col gap-2">
            <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
            <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})}>
              <option value="planet">Planet</option>
              <option value="star">Star</option>
              <option value="galaxy">Galaxy</option>
              <option value="nebula">Nebula</option>
            </select>
            <textarea placeholder="Description (min 50 chars)"
              value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
            <input placeholder="tags (comma separated)" value={form.tags} onChange={e=>setForm({...form, tags:e.target.value})}/>
            <input type="file" accept="image/*" onChange={e=>{ setTexture(e.target.files[0]); setPreviewTexture(URL.createObjectURL(e.target.files[0]));}}/>
            <button className="bg-indigo-600 px-4 py-2 rounded">Create</button>
          </form>
        </div>

        <div className="bg-slate-800 p-4 rounded">
          <h3 className="font-bold">3D Preview</h3>
          <div className="mt-3">
            <ThreeJSPreview textureUrl={previewTexture} size={350} />
            <p className="text-sm mt-2">This shows the texture preview before publishing.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-slate-800 p-4 rounded">
        <ChartDashboard />
      </div>
    </div>
  );
}
