import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-transparent shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 ">
            <NavLink to="/" className="text-2xl font-bold">
            <div className=' flex'> <img src={logo} className='w-11 h-11 rounded-full' alt="" /> <span className='text-blue-950'>Chartered Accountants Portifolio</span></div>
            </NavLink>
          </div>

          <div className="hidden  md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-bold px-3 py-2 rounded-md text-lg'
                  : 'text-gray-950 hover:text-white font-bold px-3 py-2 rounded-md text-lg'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-400 font-bold px-3 py-2 rounded-md text-lg'
                  : 'text-gray-950 hover:text-white font-bold px-3 py-2 rounded-md text-lg'
              }
            >
              Accounts
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-400 font-bold px-3 py-2 rounded-md text-lg'
                  : 'text-gray-950 hover:text-white font-bold px-3 py-2 rounded-md text-lg'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-400 font-bold px-3 py-2 rounded-md text-lg'
                  : 'text-gray-950 hover:text-white font-bold  px-3 py-2 rounded-md text-lg'
              }
            >
              Contact
            </NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={!isMenuOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-400 font-bold px-3 py-2 rounded-md text-sm'
                  : 'block text-gray-950 hover:text-white font-bold px-3 py-2 rounded-md text-sm'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-400 font-bold px-3 py-2 rounded-md text-sm'
                  : 'block text-gray-950 hover:text-white font-bold px-3 py-2 rounded-md text-sm'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Accounts
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-400 font-bold px-3 py-2 rounded-md text-sm'
                  : 'block text-gray-950 hover:text-white font-bold px-3 py-2 rounded-md text-sm'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-400 font-bold px-3 py-2 rounded-md text-sm'
                  : 'block text-gray-950 hover:text-white font-bold px-3 py-2 rounded-md text-sm'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;