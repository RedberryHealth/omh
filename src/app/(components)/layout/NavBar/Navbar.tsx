// Navbar.tsx
'use client'; // Mark this as a client-side component

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HamburgerMenu } from './HamburgerMenu';
import { CustomNavLink } from './CustomNavbarLink';
import { Star061 } from '../../Star061';
import MaskedForm from './MaskedForm'; // Import MaskedForm

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMaskedForm, setShowMaskedForm] = useState(false); // State to control the visibility of MaskedForm

  const servicesRef = useRef<HTMLDivElement | null>(null);
  const resourcesRef = useRef<HTMLDivElement | null>(null);
  const servicesButtonRef = useRef<HTMLButtonElement | null>(null);
  const resourcesButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  const getCurrentPath = () => {
    const link = pathname.split('/')[1];
    return link;
  };

  const handleClickOutsideNavbar = (event: MouseEvent) => {
    const targetElement = event.target as Element | null;

    if (
      servicesRef.current &&
      !servicesRef.current.contains(targetElement) &&
      servicesButtonRef.current &&
      !servicesButtonRef.current.contains(targetElement)
    ) {
      setServicesOpen(false);
    }

    if (
      resourcesRef.current &&
      !resourcesRef.current.contains(targetElement) &&
      resourcesButtonRef.current &&
      !resourcesButtonRef.current.contains(targetElement)
    ) {
      setResourcesOpen(false);
    }
  };

  const handleClickOutsideHamburger = (event: MouseEvent) => {
    const targetElement = event.target as Element | null;

    if (
      menuRef.current &&
      !menuRef.current.contains(targetElement) &&
      servicesRef.current &&
      !servicesRef.current.contains(targetElement) &&
      resourcesRef.current &&
      !resourcesRef.current.contains(targetElement)
    ) {
      setMenuOpen(false);
      setServicesOpen(false);
      setResourcesOpen(false);
    }
  };

  const updateIsMobile = () => {
    if (typeof window !== 'undefined') {
      // Check if window is defined
      setIsMobile(window.innerWidth < 1024);
    }
  };

  useEffect(() => {
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutsideHamburger);
    } else {
      document.addEventListener('mousedown', handleClickOutsideNavbar);
    }

    return () => {
      window.removeEventListener('resize', updateIsMobile);
      document.removeEventListener('mousedown', handleClickOutsideHamburger);
      document.removeEventListener('mousedown', handleClickOutsideNavbar);
    };
  }, [isMobile, servicesOpen, resourcesOpen, menuOpen]);

  // const scrollToFooter = () => {
  //   document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <>
      <nav className='flex flex-col w-full bg-main-background-color items-center justify-center gap-2.5 px-4 py-6 fixed top-0 z-50 shadow-lg '>
        <div className='flex w-[90%] items-center justify-between max-w-[1440px]'>
          <Link href='/'>
            <Image
              className='w-[90px] sm:w-[90px] md:w-[120px] lg:w-[160px] h-auto'
              alt='White mint'
              src='/img/white-mint-1.svg'
              width={141}
              height={45}
            />
          </Link>

          <HamburgerMenu
            menuOpen={menuOpen}
            toggleMenu={() => setMenuOpen(!menuOpen)}
            menuRef={menuRef}
          />

          <div className='hidden lg:flex w-[70%] justify-center gap-6'>
            <ul className='flex items-center gap-4'>
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
          </div>

          <div className='hidden lg:inline-flex items-center'>
            <div
              className='
                    inline-flex bg-[100%_100%] 
                    bg-[url(/img/bg.png)] 
                    w-[100px] sm:w-[100px] md:w-[150px] lg:w-[220px] 
                    h-[28px] sm:h-[28px] md:h-[40px] lg:h-[60px]
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
              <div className='ml-2 text-[10px] sm:text-[10px] md:text-[15px] lg:text-[18px] font-semibold text-second-background-color2 whitespace-nowrap'>
                Join Waitlist
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Conditionally render the MaskedForm as an overlay */}
      {showMaskedForm && (
        <MaskedForm onClose={() => setShowMaskedForm(false)} />
      )}
    </>
  );
};

export default Navbar;
