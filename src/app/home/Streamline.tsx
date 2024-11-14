'use client'; // Ensure the component is a Client Component
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function Streamline() {
  const router = useRouter(); // Initialize useRouter

  // Function to handle button click
  const handleRedirect = () => {
    router.push('/services/technology-assessor'); // Redirect to the desired route
  };

  return (
    <div className='w-full max-w-[1277px] h-auto flex flex-col md:flex-row justify-start items-start gap-8 md:gap-[122px] mx-auto p-4'>
      {/* Main Heading */}
      <div className='w-full md:w-[544px] text-[#0c0e0f] text-[32px] md:text-[40px] text-center md:text-left font-bold font-Sora'>
        Streamline Your Payment Processing
      </div>

      {/* Description and Button */}
      <div className='flex flex-col justify-center items-start gap-[15px] w-full md:w-[623px]'>
        {/* Description */}
        <div className='text-[#0c0e0f] text-[16px] md:text-[22px] text-center md:text-left font-normal font-Roboto tracking-tight'>
          Discover how Odin Merchant Hub can help you optimize your payment
          processing operations and increase revenue.
        </div>

        {/* Button */}
        <div className='hidden md:inline-flex h-auto flex justify-start items-center gap-3'>
          <div
            className='px-8 py-1 bg-[#6453ee] 
          rounded-[50px] border border-white justify-center items-center flex'>
            <div className='flex justify-center items-center gap-2'>
              <button
                onClick={handleRedirect} // Attach onClick event to handle redirect
                className='bg-main-color text-white px-6 py-3 
              rounded-full flex items-center'>
                Start Assessment
                <FaArrowRight className='ml-2 w-4 h-4' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
