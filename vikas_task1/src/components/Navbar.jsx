import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">JobHub</Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/jobs" className="hover:text-blue-200">Jobs</Link>
            <Link to="/post-job" className="hover:text-blue-200">Post a Job</Link>
            <Link to="/about" className="hover:text-blue-200">About</Link>
          </div>
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2 px-4 hover:bg-blue-700">Home</Link>
          <Link to="/jobs" className="block py-2 px-4 hover:bg-blue-700">Jobs</Link>
          <Link to="/post-job" className="block py-2 px-4 hover:bg-blue-700">Post a Job</Link>
          <Link to="/about" className="block py-2 px-4 hover:bg-blue-700">About</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

