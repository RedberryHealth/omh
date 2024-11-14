'use client';
import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

interface IntroProps {
  paragraph?: string;
  subParagraph?: string;
  buttonText?: string;
  backgroundVideoPath?: string;
  backgroundImagePath?: string;
  TitleWidthPercentage?: string;
  SpanWidthPercentage?: string;
  CardHeight?: string;
  RemoveMask?: boolean;
  maskValue?: string;
  IsNotRounded?: boolean;
  MarginTop?: string;
  leftBottomDiv?: boolean;
  LeftBottomParagraph?: string;
  LeftBottomSubParagraph?: string;
  onClick?: () => void; // Optional prop for button click
}

const IntroCard: React.FC<IntroProps> = ({
  paragraph,
  subParagraph,
  buttonText,
  backgroundVideoPath,
  backgroundImagePath,
  TitleWidthPercentage = '60%',
  SpanWidthPercentage = '60%',
  CardHeight = '869px',
  RemoveMask = false,
  maskValue = '#000000aa',
  IsNotRounded = false,
  MarginTop = 'mt-2 md:mt-32',
  leftBottomDiv = false,
  LeftBottomParagraph,
  LeftBottomSubParagraph,
  onClick // Optional onClick handler for the button
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures that we are running on the client side, not server-side.
    setIsClient(true);
  }, []);

  return (
    <div
      className={`relative w-full h-screen p-5 overflow-hidden ${MarginTop} ${
        !IsNotRounded ? 'md:rounded-[30px]' : ''
      }`}
      style={{ height: CardHeight }}>
      {/* Background Image (if provided) */}
      {backgroundImagePath && (
        <Image
          src={backgroundImagePath}
          alt='Background Image'
          layout='fill'
          objectFit='cover'
          className={`absolute top-0 left-0 w-full h-full z-0 ${
            !IsNotRounded ? 'md:rounded-[30px]' : ''
          }`}
        />
      )}

      {/* Background Video (if provided and no image) */}
      {!backgroundImagePath && backgroundVideoPath && (
        <video
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 ${
            !IsNotRounded ? 'md:rounded-[30px]' : ''
          }`}
          src={backgroundVideoPath}
          autoPlay
          loop
          muted
        />
      )}

      {/* Mask/Overlay to darken the background (only if RemoveMask is false) */}
      {!RemoveMask && (
        <div
          className={`absolute top-0 left-0 w-full h-full z-1 ${
            !IsNotRounded ? 'md:rounded-[30px]' : ''
          }`}
          style={{ backgroundColor: maskValue }}></div>
      )}

      {/* Content Container */}
      <div className='relative z-10 w-full max-w-[1282px] h-full flex items-center justify-center mx-auto'>
        <div className='flex flex-col items-center justify-center py-10'>
          {/* Render paragraph only if passed */}
          {paragraph && (
            <p
              style={{
                width:
                  isClient && window.innerWidth >= 1024
                    ? TitleWidthPercentage
                    : '100%' // Use window only when isClient is true
              }}
              className='font-bold text-white text-[25px] md:text-[35px] lg:text-[42px] text-center leading-normal'>
              {paragraph}
            </p>
          )}

          {/* Render sub-paragraph only if passed */}
          {subParagraph && (
            <p
              style={{
                width:
                  isClient && window.innerWidth >= 1024
                    ? SpanWidthPercentage
                    : '100%' // Conditionally adjust the width based on client size
              }}
              className='mt-4 font-normal text-white text-[12px] md:text-[19px] text-center leading-[1.6]'>
              {subParagraph}
            </p>
          )}

          {/* Render button only if buttonText is passed */}
          {buttonText && (
            <div className='flex justify-center mt-8'>
              <button
                onClick={onClick ? onClick : undefined} // Attach onClick only if provided
                className='bg-main-color text-white px-6 py-3 rounded-full font-semibold flex items-center text-[14px] md:text-[18px]'>
                {buttonText}
                <FaArrowRight className='ml-2 w-4 h-4' />
              </button>
            </div>
          )}
        </div>
      </div>

      {leftBottomDiv && (
        <div className='z-20 absolute left-5 bottom-5 flex flex-col items-start justify-center p-10'>
          {/* Render paragraph only if passed */}
          {LeftBottomParagraph && (
            <p
              style={{ width: TitleWidthPercentage }}
              className='text-white text-3xl font-semibold font-Sora'>
              {LeftBottomParagraph}
            </p>
          )}

          {/* Render sub-paragraph only if passed */}
          {LeftBottomSubParagraph && (
            <p
              style={{ width: SpanWidthPercentage }}
              className='text-white text-base font-normal font-Roboto leading-tight tracking-wide'>
              {LeftBottomSubParagraph}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default IntroCard;
