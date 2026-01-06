import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import API from '../api/api';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement);

export default function ChartDashboard(){
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchOverview() {
      try {
        const res = await API.get('/admin/analytics/overview');
        setData(res.data);
      } catch (err) {
        console.warn(err);
      }
    }
    fetchOverview();
  }, []);

  if (!data) return <div>Loading charts...</div>;

  const labels = data.recentUploads.map(r => r._id);
  const uploads = data.recentUploads.map(r => r.count);

  return (
    <div>
      <h3 className="text-xl">Platform Overview</h3>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-slate-800 p-4 rounded">
          <h4>Recent uploads (by month)</h4>
          <Bar data={{ labels, datasets: [{ label: 'Uploads', data: uploads }] }}/>
        </div>
        <div className="bg-slate-800 p-4 rounded">
          <h4>Summary</h4>
          <ul>
            <li>Users: {data.userCount}</li>
            <li>Objects: {data.objCount}</li>
            <li>Feedback: {data.feedbackCount}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
