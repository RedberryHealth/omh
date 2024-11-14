import React, { useEffect, useState } from 'react';
import { SideBarBlog } from './SideBarBlog';

interface SideBarProps {
  slideInTime: number; // Time before slide-in (milliseconds)
  slideOutTime: number; // Time to keep the sidebar visible (milliseconds)
  restTime: number; // Time between slide-out and next slide-in (milliseconds)
}

export default function SideBar({
  slideInTime = 10000, // default: 10 seconds
  slideOutTime = 15000, // default: 15 seconds
  restTime = 20000 // default: 20 seconds
}: SideBarProps) {
  const [isVisible, setIsVisible] = useState(false); // Controls visibility
  const [isShrinking, setIsShrinking] = useState(false); // Controls sliding out

  let inactivityTimeout: ReturnType<typeof setTimeout> | null = null;
  let slideOutTimeout: ReturnType<typeof setTimeout> | null = null;
  let resetTimeout: ReturnType<typeof setTimeout> | null = null;

  const startCycle = () => {
    setIsVisible(true); // Start slide-in (become visible)
    setIsShrinking(false); // Ensure it's not sliding out

    slideOutTimeout = setTimeout(() => {
      setIsShrinking(true); // Start sliding out
    }, slideOutTime);

    resetTimeout = setTimeout(() => {
      setIsVisible(false); // Sidebar fully hidden
      setIsShrinking(false); // Reset sliding state

      inactivityTimeout = setTimeout(startCycle, restTime);
    }, slideOutTime + 700);
  };

  const resetInactivityTimeout = () => {
    if (inactivityTimeout) clearTimeout(inactivityTimeout);
    if (slideOutTimeout) clearTimeout(slideOutTimeout);
    if (resetTimeout) clearTimeout(resetTimeout);

    resetTimeout = setTimeout(() => {
      setIsVisible(false);
      inactivityTimeout = setTimeout(startCycle, restTime);
    }, slideInTime);
  };

  useEffect(() => {
    document.addEventListener('mousemove', resetInactivityTimeout);
    document.addEventListener('keydown', resetInactivityTimeout);
    document.addEventListener('scroll', resetInactivityTimeout);
    document.addEventListener('click', resetInactivityTimeout);

    inactivityTimeout = setTimeout(startCycle, slideInTime);

    return () => {
      document.removeEventListener('mousemove', resetInactivityTimeout);
      document.removeEventListener('keydown', resetInactivityTimeout);
      document.removeEventListener('scroll', resetInactivityTimeout);
      document.removeEventListener('click', resetInactivityTimeout);

      if (inactivityTimeout) clearTimeout(inactivityTimeout);
      if (slideOutTimeout) clearTimeout(slideOutTimeout);
      if (resetTimeout) clearTimeout(resetTimeout);
    };
  }, [slideInTime, slideOutTime, restTime]);

  return (
    <div className='relative w-full max-w-screen-md'>
      {' '}
      {/* Sidebar container */}
      {/* Mask that covers the entire page */}
      <div
        className={`fixed top-0 left-0 w-full bg-black bg-opacity-50 z-20 ${
          isVisible && !isShrinking ? 'opacity-50' : 'opacity-0'
        }`}
        style={{
          height: '100vh',
          pointerEvents: 'none',
          transition: 'opacity 0.5s ease'
        }}>
        <div style={{ height: '100%', minHeight: '100%' }}></div>
      </div>
      {/* SideBarBlog with slide-in/slide-out animation */}
      <div
        className={`absolute top-0 left-0 h-full z-30 transform transition-transform duration-700 ${
          isVisible
            ? isShrinking
              ? '-translate-x-[110%]' // Slide out further to the left
              : 'translate-x-0' // Fully visible
            : '-translate-x-[110%]' // Hidden offscreen to the left
        }`}
        style={{
          width: '100%', // Full width of the container
          maxWidth: '100vw', // Ensures it spans the container width responsively
          minWidth: '50%', // Ensures it maintains half the viewport width on larger screens
          transition: 'transform 0.7s ease' // Transition for slide-in/slide-out animation
        }}>
        <SideBarBlog />
      </div>
    </div>
  );
}
