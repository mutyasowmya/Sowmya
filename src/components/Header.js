import React, { useEffect, useState } from 'react';

// Import components
import Logo from '../assets/img/s.jpg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-blue-500 h-20' : 'bg-transparent h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* Logo */}
        
        {/* Nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials target="_blank" />
        </div>
        {/* Nav mobile */}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
