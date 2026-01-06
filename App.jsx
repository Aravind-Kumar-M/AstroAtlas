import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SpaceGallery from './pages/SpaceGallery';
import Explore from './pages/Explore';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Visualization from './pages/Visualization';
import Reports from './pages/Reports';
import AuthForms from './components/AuthForms';
import './styles/globals.css';

export default function App(){
  return (
    <div className="min-h-screen bg-[#080712] text-white">
      <NavBar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<SpaceGallery/>}/>
          <Route path="/explore/:id" element={<Explore/>}/>
          <Route path="/user" element={<UserDashboard/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/visualization" element={<Visualization/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/login" element={<AuthForms mode="login"/>}/>
          <Route path="/register" element={<AuthForms mode="register"/>}/>
        </Routes>
      </main>
    </div>
  );
}
