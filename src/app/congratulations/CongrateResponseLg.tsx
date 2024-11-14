'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // To handle navigation
import Image from 'next/image'; // Import the Next.js Image component
import { Checkmark1 } from './Checkmark1';

const CongrateResponseLg = () => {
  const router = useRouter(); // Initialize the router to redirect

  const handleBackToHome = () => {
    router.push('/'); // Redirect to home page
  };

  return (
    <div className="bg-[url('/img/background.svg')] bg-cover bg-center flex items-center justify-center w-screen h-screen">
      <div className='flex flex-col w-full max-w-2xl lg:max-w-3xl items-center justify-center gap-9 px-5 py-9 relative bg-main-background-color5 rounded-lg mx-auto'>
        {/* Close button in top-right corner */}
        <Image
          className='absolute w-9 h-9 top-[13px] right-[13px] cursor-pointer hover:scale-110 transition-transform' // Add hover effect and cursor pointer
          alt='Close'
          src='/img/closex.svg'
          width={36} // Define width for the close icon (9 * 4 = 36px)
          height={36} // Define height for the close icon (9 * 4 = 36px)
          objectFit='cover' // Ensure it fits properly
          onClick={handleBackToHome} // Redirect when clicked
        />
        <div className='relative w-[184px] h-[184px] flex items-center justify-center'>
          <div className='relative w-[184px] h-[184px]'>
            <div className='absolute w-[142px] h-[142px] top-[21px] left-[21px]'>
              <div className='top-0 left-[69px] absolute w-[3px] h-3 bg-main-color rounded-[1px]' />
              <div className='top-[130px] left-[69px] absolute w-[3px] h-3 bg-main-color rounded-[1px]' />
              <div className='top-[65px] left-[135px] rotate-[90deg] absolute w-[3px] h-3 bg-main-color rounded-[1px]' />
              <div className='top-[65px] left-1 rotate-[90deg] absolute w-[3px] h-3 bg-main-color rounded-[1px]' />
            </div>
            <div className='absolute w-[184px] h-[184px] top-0 left-0'>
              <div className='relative w-[130px] h-[130px] top-[27px] left-[27px] rotate-45'>
                <div className='absolute w-[3px] h-1.5 top-0 left-16 bg-secondary rounded-[1px]' />
                <div className='absolute w-[3px] h-1.5 top-[124px] left-16 bg-secondary rounded-[1px]' />
                <div className='absolute w-[3px] h-1.5 top-[62px] left-[126px] bg-secondary rounded-[1px] rotate-[90deg]' />
                <div className='absolute w-[3px] h-1.5 top-[62px] left-px bg-secondary rounded-[1px] rotate-[90deg]' />
              </div>
            </div>
            <div className='absolute w-[106px] h-[106px] top-[39px] left-[39px] bg-main-color rounded-[53.23px]'>
              <Checkmark1 className='!absolute !w-[35px] !h-[35px] !top-[35px] !left-[35px]' />
            </div>
          </div>
        </div>
        <div className='h-[67px] gap-6 w-full flex items-center justify-center relative'>
          {/* Centered text */}
          <div className='flex-col gap-4 flex-1 flex items-center relative text-center'>
            <div className='relative w-fit mt-[-1.00px] font-sora font-semibold text-contrust-color4 text-lg lg:text-xl tracking-[0] leading-[normal]'>
              Thanks for Subscribing
            </div>
            <div className='flex-col gap-1 w-full flex items-center relative'>
              <p className='relative w-full text-center text-contrust-color4 text-xs lg:text-sm tracking-[0] leading-6'>
                You have successfully subscribed to Odin Markets Newsletter
              </p>
            </div>
          </div>
        </div>
        <div className='w-full max-w-lg lg:max-w-2xl justify-center gap-4 flex-[0_0_auto] flex items-center'>
          {/* Back to Home Button */}
          <button
            className='all-[unset] box-border flex w-full h-11 items-center justify-center gap-2.5 px-5 py-3.5 relative bg-main-color rounded-lg border border-solid border-black cursor-pointer hover:bg-main-color3 transition-all'
            onClick={handleBackToHome} // Redirect when clicked
          >
            <div className='relative w-fit mt-[-1.50px] font-inter font-medium text-main-background-color text-sm lg:text-base tracking-[0] leading-[normal]'>
              Back to Home
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CongrateResponseLg;
