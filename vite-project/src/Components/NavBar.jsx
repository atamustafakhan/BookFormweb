import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ReorderIcon from '@mui/icons-material/Reorder';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import HomeIcon from '@mui/icons-material/Home';

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    <nav className='fixed top-3 left-2 right-2 flex bg-slate-300 rounded-full z-10'>
      {/* container */}
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center'>
          {/* Toggler button */}
          <div className="p-3">
            <button
              className='lg:hidden inline-flex items-center justify-center border h-10 w-10 rounded-md'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </button>
            {/* Menu */}
            <div className={`lg:inline-flex p-2 lg:w-auto mt-2 lg:mt-0 ${navbarOpen ? 'flex' : 'hidden'}`}>
              <ul className='flex lg:flex-row flex-col lg:space-x-3'>
                <li>
                  <Link to="/Home" className='flex font-medium hover:bg-red-500'>
                    <img className='size-10' src="src/Images/logo.png" alt="Logo" />
                  </Link>
                </li>
                <li>
                  <Link to="/Home" className='flex px-4 py-2 font-medium hover:bg-red-500'><HomeIcon /> &nbsp; Home</Link>
                </li>
                <li>
                  <Link to="/BookShelf" className='flex px-4 py-2 font-medium hover:bg-red-500'><ReorderIcon /> &nbsp; Book Form</Link>
                </li>
                <li>
                  <Link to="/AddBookForm" className='flex px-4 py-2 font-medium hover:bg-red-500'><LibraryAddIcon /> &nbsp; Add Books</Link>
                </li>
                <li>
                  <Link to="/Home" className='flex ml-8 px-4 py-2 font-extrabold text-red-500 hover:text-red-700'> Premium Books</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Brand logo */}
        <Link to="/Home" className='flex mx-auto hover:bg-blue-95 rounded-3xl px-4 py-4'>
          <div className='text-red-500 font-extrabold'></div>
        </Link>
        {/* Icons */}
        <ul className='flex'>
          <li
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className='flex outline-none focus:outline px-3 py-2 mx-4 font-medium rounded-3xl bg-red-500 hover:bg-red-500'>
              <AccountBoxIcon /> Account
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 10" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Drop down */}
            {dropdownOpen && (
              <div className={`absolute right-20 bg-slate-400 rounded-md p-2  shadow-lg`}>
                <ul className='space-y-2 lg:w-20'>
                  <Link to="/LoginForm" className='block px-4 py-2 rounded-md hover:bg-red-500'>
                    <li><LoginIcon /> Login</li>
                  </Link>
                  <Link to="/SignUpForm" className='block px-4 py-2 rounded-md hover:bg-red-500'>
                    <li><PersonAddAltIcon /> Signup</li>
                  </Link>
                </ul>
              </div>
            )}
            {/* Drop down */}
          </li>
        </ul>
        {/* Icons */}
      </div>
      {/* container */}
    </nav>
  );
}

export default NavBar;
