import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-300">MyBookingApp</a>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search for accommodations..."
            className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation - Types of Accommodation */}
        <nav className="hidden md:flex space-x-4 mr-4">
          <a href="/rooms" className="hover:text-gray-300">Rooms</a>
          <a href="/mansion" className="hover:text-gray-300">Mansion</a>
          <a href="/countryside" className="hover:text-gray-300">Countryside</a>
          <a href="/apartments" className="hover:text-gray-300">Apartments</a>
          <a href="/villas" className="hover:text-gray-300">Villas</a>
        </nav>

        {/* Sign In / Sign Up */}
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">
            Sign In
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;