'use client';

import React, { useState, useEffect } from 'react';
import ServiceList from './OurServices/ServiceList';
import SerivceListVertical from './OurServices/SerivceListVertical';

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  videoSrc: string;
}

export const OurServices = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const servicesData: ServiceCard[] = [
    {
      title: 'Payment Processing',
      description:
        'Our secure, fast, and scalable payment solutions meet the demands of businesses in every industry, whether you operate online, in-store, or on the go',
      icon: '/img/cards.svg',
      videoSrc: '/img/cards.mov'
    },
    {
      title: 'POS Systems',
      description:
        'Our intuitive POS systems allow you to manage payments, track inventory, and enhance customer experiences seamlessly, whether you’re in retail, healthcare, or food services',
      icon: '/img/calculator.svg',
      videoSrc: '/img/calc.mov'
    },
    {
      title: 'ISV & Fintech Integrations',
      description:
        'Odin Merchant Hub partners with leading ISVs and fintech innovators to provide custom payment solutions integrated into your platform, ensuring smooth transactions for your clients',
      icon: '/img/money-send.svg',
      videoSrc: '/img/money.mov'
    },
    {
      title: 'Merchant Support',
      description:
        'We offer dedicated support from the moment you start with Odin Merchant Hub, ensuring that your payment operations run smoothly from setup to optimization.',
      icon: '/img/support-agent.svg',
      videoSrc: '/img/support.mp4'
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
    <div className='w-full max-w-[1440px] min-h-screen bg-white flex flex-col items-center gap-10 mx-auto py-10'>
      <div className='flex flex-col w-[290px] items-center gap-5'>
        <p className='font-normal text-main-color text-xl text-center whitespace-nowrap'>
          Why use Odin Merchant Hub?
        </p>

        <div className='font-bold text-black text-[44px] text-center'>
          Our Services
        </div>
      </div>

      {/* Show ServiceList or SerivceListVertical based on screen width */}
      {windowWidth >= 1000 ? (
        <ServiceList
          servicesData={servicesData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ) : (
        <SerivceListVertical servicesData={servicesData} />
      )}
    </div>
  );
};
