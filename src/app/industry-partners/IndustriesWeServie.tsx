'use client';

import React, { useState, useEffect } from 'react';
import IntroCard from '../(components)/IntroCard/IntroCard';
import IndustryServeCardListVertical from './TrustedPartners/IndustriesWeServe/IndustryServeCardListVertical';

export default function IndustriesWeServe() {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const cardsData = [
    {
      Paragraph: 'For Retailers',
      SubPargraph:
        'Modern POS systems and secure payment solutions that enhance customer satisfaction and streamline operations.',
      Video: '/img/industry-video-1.mov'
    },
    {
      Paragraph: 'For Healthcare Providers',
      SubPargraph:
        'Secure, compliant payment options integrated with your practice management system for smooth operations',
      Video: '/img/industry-video-2.mov'
    },
    {
      Paragraph: 'For Restaurants & Food Services',
      SubPargraph:
        'Reliable, contactless payment solutions that optimize service, improve order management, and streamline payments',
      Video: '/img/industry-video-3.mov'
    },
    {
      Paragraph: 'For Fintech & E-Commerce',
      SubPargraph:
        'Customized payment integrations for ISVs and fintech platforms to offer seamless, secure transactions to your clients',
      Video: '/img/industry-video-4.mov'
    }
  ];

  // Update window width when the screen is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Set initial width
    setWindowWidth(window.innerWidth);

    // Remove the event listener when the component is unmounted
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center mx-auto my-20'>
      <div className='text-center text-main-color text-[22px] sm:text-[22px] md:text-[35px] lg:text-[44px] font-bold font-Sora'>
        Industries we serve
      </div>
      <div className='w-full h-auto px-5 py-5'>
        <p className='font-sora font-normal text-[#0c0e0f] text-sm md:text-lg text-center tracking-[0.18px] leading-[21.6px]'>
          Whether you’re in retail, healthcare, restaurants, fintech,
          e-commerce, or ISVs, we provide solutions tailored specifically for
          your business. Our industry expertise ensures that you have the right
          tools to manage your operations, serve customers, and grow.
        </p>
      </div>

      {/* Conditional rendering based on window width */}
      {windowWidth >= 1000 ? (
        // Show IntroCard for larger screens (>= 1000px)
        <>
          {cardsData.map((card, index) => (
            <IntroCard
              key={index}
              leftBottomDiv={true}
              LeftBottomParagraph={card.Paragraph}
              LeftBottomSubParagraph={card.SubPargraph}
              backgroundVideoPath={card.Video}
              TitleWidthPercentage='60%'
              SpanWidthPercentage='100%'
              MarginTop='mt-2 md:mt-5'
              maskValue='#00000022'
            />
          ))}
        </>
      ) : (
        // Show IndustryServeCardListVertical for smaller screens (< 1000px)
        <IndustryServeCardListVertical servicesData={cardsData} />
      )}
    </div>
  );
}
