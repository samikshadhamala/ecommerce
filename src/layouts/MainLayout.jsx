import React from 'react'
import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';

function Mainlayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 container mx-auto max-w-7xl py-8 px-4 w-full">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}
export default Mainlayout;