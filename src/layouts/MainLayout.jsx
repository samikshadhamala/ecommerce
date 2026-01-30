import React from 'react'
import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';

function Mainlayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container-sm py-8">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}
export default Mainlayout;