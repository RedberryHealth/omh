'use client';
import React, { useState, useEffect } from 'react';
import IntroComponent from '@/app/(components)/AnimatedIntro/IntroComponent';
import IntroCard from '@/app/(components)/IntroCard/IntroCard';
// import { useWindowSize } from '@/hooks/useWindowSize';

export default function HomeIntro() {
  const [showIntro, setShowIntro] = useState(true);
  const [showIntroMobile, setShowIntroMobile] = useState(true);
  const [width, setWidth] = useState<number | undefined>(undefined); // State to store window width

  useEffect(() => {
    // Check if the intro has been shown before
    const introShown = localStorage.getItem('introShown');
    if (introShown) {
      setShowIntro(false); // If introShown is found in localStorage, don't show the intro again
    }
    const introShownMobile = localStorage.getItem('introShownMobile');
    if (introShownMobile) {
      setShowIntroMobile(false); // If introShownMobile is found in localStorage, don't show the intro again
    }

    // Function to handle window resize
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWidth(window.innerWidth); // Update width on resize
      }
    };

    // Initial width check
    handleResize();

    // Only add the event listener if window is defined
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize); // Cleanup listener
      };
    }
  }, []);

  // Callback to hide the intro when it's completed
  const handleIntroComplete = (isMobile: boolean) => {
    if (isMobile) {
      setShowIntroMobile(false); // Hide the mobile intro when it finishes
      localStorage.setItem('introShownMobile', 'true'); // Mark the mobile intro as shown
    } else {
      setShowIntro(false); // Hide the desktop intro when it finishes
      localStorage.setItem('introShown', 'true'); // Mark the desktop intro as shown
    }
  };

  return (
    <>
      {width && width >= 768
        ? showIntro && (
            <IntroComponent
              onIntroComplete={() => handleIntroComplete(false)}
            />
          )
        : showIntroMobile && (
            <IntroComponent onIntroComplete={() => handleIntroComplete(true)} />
          )}
      <IntroCard
        paragraph='Empowering Merchants with Next-Gen Payment Solutions'
        subParagraph='Simplify your business with cutting-edge tools and reliable payment systems tailored to your needs.'
        buttonText='Upload Your Merchant Statement'
        backgroundVideoPath='/img/bg1.mov'
        TitleWidthPercentage='60%'
        SpanWidthPercentage='100%'
      />
    </>
  );
}
