import React from 'react';
import WhyCard from './why/WhyCard';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link'; // Import Link from Next.js

export const WhyCarousal = (): JSX.Element => {
  // Array containing the data for each card
  const cardsData = [
    {
      mainImage: '/img/Retailers-main.jpeg',
      iconImage: '/img/Retailers-smal.png',
      title: 'For Retailers'
    },
    {
      mainImage: '/img/Providers-main.jpeg',
      iconImage: '/img/Providers-smal.png',
      title: 'For Healthcare Providers'
    },
    {
      mainImage: '/img/Owners-main.jpeg',
      iconImage: '/img/Owners-smal.png',
      title: 'For Restaurants Owners'
    },
    {
      mainImage: '/img/Operators-main.png',
      iconImage: '/img/Operators-smal.png',
      title: 'For Fintech Operators'
    },
    {
      mainImage: '/img/Business-main.png',
      iconImage: '/img/Business-smal.png',
      title: 'For E-Commerce Business'
    },
    {
      mainImage: '/img/ISVs-main.png',
      iconImage: '/img/ISVs-smal.png',
      title: 'For ISVs'
    }
  ];

  return (
    <div className='py-20 flex flex-col w-full max-w-[1200px] items-center justify-center gap-[50px] mx-auto'>
      <div className='flex flex-col items-start gap-[22px] w-full'>
        <div className='flex flex-col items-center gap-5 w-full'>
          <p className='px-2 font-bold text-[#0c0e0f] text-[35px] md:text-[44px] text-center leading-[normal]'>
            Why Choose Odin Merchant Hub?
          </p>
        </div>

        <p className='px-[3px] font-normal text-[#0c0e0f] text-[13px] md:text-[14px] text-center leading-[21.6px]'>
          At Odin Merchant Hub, we provide payment technologies and trusted
          partnerships that empower businesses of all sizes to thrive. Our
          solutions make managing payments easy, efficient, and cost-effective.
          Our tailored services help you reduce costs, streamline operations,
          and grow your business.
        </p>
      </div>

      {/* Grid for Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cardsData.map((card, index) => (
          <WhyCard
            key={index}
            mainImage={card.mainImage}
            iconImage={card.iconImage}
            title={card.title}
          />
        ))}
      </div>

      {/* Explore Our Services */}
      <div className='hidden md:inline-flex h-[140px] items-center gap-[var(--3-spacing-spacing-lg)]'>
        <div className='inline-flex h-[140px] items-center justify-center px-8 py-2.5 bg-secondary rounded-[50px] overflow-hidden border border-solid border-transparent'>
          <div className='flex justify-center mt-8'>
            <Link href='/services'>
              <button className='mb-10 bg-main-color text-white px-6 py-4 rounded-full font-semibold flex items-center'>
                Explore Our Services
                <FaArrowRight className='ml-2 w-4 h-4' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
