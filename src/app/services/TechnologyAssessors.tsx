'use client'; // Mark this component as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation'; // Updated import from next/navigation
import IntroCard from '../(components)/IntroCard/IntroCard';

export default function TechnologyAssessors() {
  const router = useRouter();

  // Function to handle button click
  const handleRedirect = () => {
    router.push('/services/technology-assessor'); // Redirect to the desired route
  };

  return (
    <div className='w-full flex flex-col justify-center items-center mx-auto my-20'>
      <div className='text-center text-[#0c0e0f] text-[22px] sm:text-[22px] md:text-[35px] lg:text-[44px] font-bold font-Sora'>
        Technology Assessor Tool
      </div>
      <IntroCard
        paragraph='Find Your Ideal Payment Solution in Minutes'
        subParagraph='Answer a few questions, and our expertise will guide you to the best payment solution for your business'
        buttonText='Start your Assessment'
        backgroundImagePath='/img/service-2.jpeg'
        TitleWidthPercentage='60%'
        SpanWidthPercentage='100%'
        MarginTop='mt-2 md:mt-5'
        onClick={handleRedirect} // Pass the handleRedirect function
      />
    </div>
  );
}
