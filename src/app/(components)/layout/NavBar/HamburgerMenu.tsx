// HamburgerMenu.tsx
'use client';
import { RefObject, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { Star061 } from '../../Star061';
import Image from 'next/image';
import { CustomNavLink } from './CustomNavbarLink'; // Updated CustomNavLink component
import MaskedForm from './MaskedForm'; // Import MaskedForm component

type HamburgerMenuProps = {
  menuOpen: boolean;
  toggleMenu: () => void;
  menuRef: RefObject<HTMLDivElement>; // Pass menuRef to handle clicks outside
};

export const HamburgerMenu = ({
  menuOpen,
  toggleMenu,
  menuRef
}: HamburgerMenuProps) => {
  const pathname = usePathname(); // Get the current path
  const [showMaskedForm, setShowMaskedForm] = useState(false); // State to control the visibility of MaskedForm

  // Function to get the current route for active links
  const getCurrentPath = () => {
    const link = pathname.split('/')[1];
    return link;
  };

  return (
    <>
      <div className='lg:hidden'>
        <button
          className='text-main-color focus:outline-none hamburger-btn'
          onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes size={24} />
          ) : (
            <Image
              src='/img/humb.svg'
              alt='Hamburger Menu Icon'
              width={24}
              height={24}
            />
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          ref={menuRef} // Reference for detecting outside clicks
          className='absolute left-0 w-full top-[65px] p-5 text-contrust-color4 shadow-lg rounded-lg z-40 p-4 flex flex-col gap-6 items-start bg-main-background-color'>
          <ul className='flex flex-col gap-8'>
            <CustomNavLink
              href='/'
              text='Home'
              isActive={getCurrentPath() === ''}
            />
            <CustomNavLink
              href='/services'
              text='Services'
              isActive={getCurrentPath() === 'services'}
            />
            <CustomNavLink
              href='/industry-partners'
              text='Industry Partners'
              isActive={getCurrentPath() === 'industry-partners'}
            />
            <CustomNavLink
              href='/about'
              text='About Us'
              isActive={getCurrentPath() === 'about'}
            />
            <CustomNavLink
              href='/contact'
              text='Contact Us'
              isActive={getCurrentPath() === 'contact'}
            />
          </ul>
          {/* Join Waitlist Button */}
          <div className='p-5 inline-flex items-center'>
            <div
              className='
                  inline-flex bg-[100%_100%] 
                  bg-[url(/img/bg.png)] 
                  w-[140px] 
                  h-[40px]
                  items-center 
                  px-4 sm:px-8 py-2.5 bg-main-color 
                  rounded-tr-[20px] border  
                  hover:bg-main-color3 hover:cursor-pointer transition-all 
                  duration-300 transition 
                  duration-300 
                  hover:bg-main-color3'
              onClick={() => setShowMaskedForm(true)} // Show MaskedForm on click
            >
              <Star061 w='64' h='64' />
              <div className='ml-2 text-[12px] font-semibold text-second-background-color2 whitespace-nowrap'>
                Join Waitlist
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Conditionally render the MaskedForm as an overlay */}
      {showMaskedForm && (
        <MaskedForm onClose={() => setShowMaskedForm(false)} />
      )}
    </>
  );
};
