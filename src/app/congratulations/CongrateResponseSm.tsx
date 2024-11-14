'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter to handle navigation
import Image from 'next/image'; // Import the Next.js Image component
import { Checkmark1 } from './Checkmark1';

const CongrateResponseSm = () => {
  const router = useRouter(); // Initialize the router to redirect

  const handleBackToHome = () => {
    router.push('/'); // Redirect to home page
  };

  return (
    <div className="bg-[url('/img/background.svg')] bg-cover bg-center flex items-center justify-center w-screen h-screen">
      <div className='w-[367px] h-[413px]'>
        <div className='relative h-[413px] rounded-lg'>
          <div className='flex flex-col w-[367px] h-[413px] items-center justify-center gap-7 px-10 py-9 absolute top-0 left-0 bg-main-background-color5 rounded-lg shadow-shadow-small'>
            <div className='relative w-[137px] h-[137px]'>
              <div className='relative h-[137px]'>
                <div className='absolute w-[106px] h-[106px] top-4 left-4'>
                  <div className='top-0 left-[52px] absolute w-0.5 h-[9px] bg-main-color rounded-[1px]' />
                  <div className='top-[97px] left-[52px] absolute w-0.5 h-[9px] bg-main-color rounded-[1px]' />
                  <div className='top-12 left-[100px] rotate-[90deg] absolute w-0.5 h-[9px] bg-main-color rounded-[1px]' />
                  <div className='top-12 left-[3px] rotate-[90deg] absolute w-0.5 h-[9px] bg-main-color rounded-[1px]' />
                </div>
                <div className='absolute w-[137px] h-[137px] top-0 left-0'>
                  <div className='relative w-[97px] h-[97px] top-5 left-5 rotate-45'>
                    <div className='absolute w-0.5 h-1 top-0 left-[47px] bg-secondary rounded-[1px]' />
                    <div className='absolute w-0.5 h-1 top-[92px] left-[47px] bg-secondary rounded-[1px]' />
                    <div className='absolute w-0.5 h-1 top-[46px] left-[94px] bg-secondary rounded-[1px] rotate-[90deg]' />
                    <div className='absolute w-0.5 h-1 top-[46px] left-px bg-secondary rounded-[1px] rotate-[90deg]' />
                  </div>
                </div>
                <div className='absolute w-[79px] h-[79px] top-[29px] left-[29px] bg-main-color rounded-[39.63px]'>
                  <Checkmark1 className='!absolute !w-[26px] !h-[26px] !top-[26px] !left-[26px]' />
                </div>
              </div>
            </div>
            <div className='flex w-[313px] h-[87px] items-start justify-center gap-6 relative ml-[-13px] mr-[-13px]'>
              <div className='flex flex-col items-center gap-4 relative flex-1 grow'>
                <div className='relative w-fit mt-[-1px] font-sora font-semibold text-contrust-color4 text-lg tracking-[0] leading-[normal]'>
                  Thanks for Subscribing
                </div>
                <div className='flex flex-col w-[313px] items-start gap-1 relative flex-[0_0_auto]'>
                  <p className='relative w-[315px] mt-[-1px] mr-[-2px] font-sora font-normal text-contrust-color4 text-xs text-center tracking-[0] leading-6'>
                    You have successfully subscribed to Odin Markets Newsletter
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-start justify-end gap-4 relative self-stretch w-full flex-[0_0_auto]'>
              <button
                className='all-[unset] box-border flex w-[287px] h-11 items-center justify-center gap-2.5 px-5 py-3.5 relative bg-main-color rounded-lg border border-solid border-black cursor-pointer hover:bg-main-color3 transition-all'
                onClick={handleBackToHome} // Redirect when clicked
              >
                <div className='relative w-fit mt-[-1.5px] font-inter font-medium text-main-background-color text-sm tracking-[0] leading-[normal]'>
                  Back to Home
                </div>
              </button>
            </div>
          </div>
          <Image
            className='absolute w-9 h-9 top-[13px] left-[318px] cursor-pointer hover:scale-110 transition-transform' // Add hover effect and cursor pointer
            alt='Close' // Always include descriptive alt text
            src='/img/closex.svg' // Image source remains the same
            width={36} // Define width explicitly (w-9 = 36px)
            height={36} // Define height explicitly (h-9 = 36px)
            objectFit='cover' // Ensure proper fit for the image
            onClick={handleBackToHome} // Redirect when clicked
          />
        </div>
      </div>
    </div>
  );
};

export default CongrateResponseSm;
