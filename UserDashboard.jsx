import React from 'react';
import { jsPDF } from 'jspdf';
import { CELESTIAL_SEED } from '../data/celestialSeed';

export default function UserDashboard(){
  const myCollections = [
    { id: 'col1', name: 'Solar Tour', objects: [CELESTIAL_SEED[0], CELESTIAL_SEED[2]] }
  ];

  function exportCollectionPDF(col) {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(col.name, 20, 20);
    let y = 30;
    col.objects.forEach((o, i) => {
      doc.setFontSize(12);
      doc.text(`${i+1}. ${o.name} (${o.type})`, 20, y);
      y += 8;
      doc.text(o.description ? o.description.substring(0, 120) : '—', 20, y);
      y += 12;
      if (y > 260) { doc.addPage(); y = 20; }
    });
    doc.save(`${col.name}.pdf`);
  }

  return (
    <div>
      <h1 className="text-2xl">User Dashboard</h1>
      <section className="mt-4 bg-slate-800 p-4 rounded">
        <h3>Profile & Settings</h3>
        <p>Name: Example user</p>
        <p>Email: example@astro.com</p>
      </section>

      <section className="mt-4 bg-slate-800 p-4 rounded">
        <h3>My Collections</h3>
        {myCollections.map(c => (
          <div key={c.id} className="flex items-center justify-between p-2">
            <div>
              <div className="font-semibold">{c.name}</div>
              <div className="text-sm opacity-75">{c.objects.length} objects</div>
            </div>
            <div className="flex gap-2">
              <button onClick={()=>exportCollectionPDF(c)} className="px-3 py-1 bg-yellow-600 rounded">Download PDF</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
