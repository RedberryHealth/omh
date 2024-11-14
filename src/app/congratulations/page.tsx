'use client'; // Mark this as a client-side component

import React, { useEffect, useState } from 'react';
import Layout from '../(components)/layout/Layout';
import CongrateResponseLg from './CongrateResponseLg';
import CongrateResponseSm from './CongrateResponseSm';

const About = () => {
  const [isSmOrSmaller, setIsSmOrSmaller] = useState(false);

  useEffect(() => {
    // Function to check if the window width is sm or smaller
    const checkWindowSize = () => {
      if (typeof window !== 'undefined') {
        // Check if window is defined
        const smBreakpoint = 640; // Tailwind's sm breakpoint is 640px
        setIsSmOrSmaller(window.innerWidth <= smBreakpoint);
      }
    };

    // Run the function on component mount and when resizing
    checkWindowSize();

    // Only add the event listener if window is defined
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkWindowSize);
    }

    // Cleanup listener on component unmount
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkWindowSize);
      }
    };
  }, []);

  return (
    <Layout>
      {isSmOrSmaller ? <CongrateResponseSm /> : <CongrateResponseLg />}
    </Layout>
  );
};

export default About;
