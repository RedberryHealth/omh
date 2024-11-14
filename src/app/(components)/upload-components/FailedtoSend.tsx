'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { HiOutlineTrash } from 'react-icons/hi';

interface FailedSendProps {
  fileName: string;
  onClear: () => void;
}

export default function FailedtoSend({ fileName, onClear }: FailedSendProps) {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    // Blink effect toggles every 500ms
    const blinkInterval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);

    // Show component for 2 seconds, then clear
    const timer = setTimeout(() => {
      onClear();
      clearInterval(blinkInterval);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(blinkInterval);
    };
  }, [onClear]);

  return (
    <div
      className={`flex h-[264px] items-center justify-center gap-3 px-6 py-7 relative self-stretch w-full 
        rounded-2xl overflow-hidden border-[3px] border-dashed border-second-background-color3
        ${blink ? 'bg-red-100' : 'bg-[#fff]'}`}>
      <div className='flex flex-col items-center gap-4 relative flex-1 grow'>
        <div className='relative w-[60px] h-[60px] '>
          <Image
            src='/img/failed.svg'
            alt='Cloud Upload Icon'
            width={60}
            height={60}
            className=''
          />
        </div>

        <div className='my-2 inline-flex flex-col items-center gap-2 relative w-full'>
          <div className='w-full max-w-[352px] h-4'>
            <div className="[font-family:'Roboto-Medium',Helvetica] font-medium text-red-700 text-sm text-center tracking-[0] leading-[normal]">
              Failed to send, please try again...
            </div>
            <div className="p-1 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#98a1b2] text-xs text-center tracking-[0] leading-[normal]">
              {fileName}
            </div>
          </div>
        </div>

        <div className='my-2 inline-flex flex-col items-center gap-2 relative w-full'>
          <div className='w-full max-w-[352px] h-4'>
            <div
              className='w-full inline-flex items-center justify-center gap-2 relative cursor-pointer hover:bg-gray-100 rounded-md p-2 transition-colors'
              onClick={onClear}>
              <HiOutlineTrash className='relative w-5 h-5 text-[#98A2B3] hover:text-red-500' />
              <div className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-gray-400 text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap hover:text-red-500">
                Clear Upload
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
