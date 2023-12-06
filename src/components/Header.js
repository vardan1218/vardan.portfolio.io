import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-white px-4 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between h-16'>
        <div className='flex items-center'>
          <img src={process.env.PUBLIC_URL + '/logo.jpeg'} className='w-24 h-24 mr-3' alt="logo" />
        </div>
        <div className='hidden md:block'>
          <div className='ml-10 flex items-baseline space-x-4'>
            <a href='#' className='text-gray-700 px-3 py-2 rounded-md text-sm font-medium' aria-current='page'>Home</a>
            <a href='#' className='text-gray-700 px-3 py-2 rounded-md text-sm font-medium'>About</a>
            <a href='#' className='text-gray-700 px-3 py-2 rounded-md text-sm font-medium'>Portfolio</a>
            <a href='https://medium.com/@vardanwadhwa72' target='_blank' rel='noopener noreferrer' className='text-gray-700 px-3 py-2 rounded-md text-sm font-medium'>Blog</a>
          </div>
        </div>
        <div className='-mr-2 flex md:hidden'>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type='button'
            className='bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
            aria-controls='mobile-menu'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            {/* Icon when menu is closed. */}
            {/* Heroicon name: outline/menu */}
            <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
            {/* Icon when menu is open. */}
            {/* Heroicon name: outline/x */}
            <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id='mobile-menu'>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <a href='#' className='text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Home</a>
          <a href='#' className='text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>About</a>
          <a href='#' className='text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Portfolio</a>
          <a href='https://medium.com/@vardanwadhwa72' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Blog</a>
        </div>
      </div>
    </nav>
  )
}

export default Header;
