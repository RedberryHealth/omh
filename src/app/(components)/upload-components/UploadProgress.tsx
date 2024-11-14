'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface UploadProgressProps {
  onComplete: () => void;
}

export default function UploadProgress({ onComplete }: UploadProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervalTime = 20; // Interval for smoother progress updates
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = Math.min(prevProgress + increment, 100);
        if (newProgress >= 100) {
          clearInterval(interval);
          onComplete();
        }
        return newProgress;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className='flex h-[264px] items-center justify-center gap-3 px-6 py-7 relative self-stretch w-full bg-[#fff] rounded-2xl overflow-hidden border-[3px] border-dashed border-second-background-color3'>
      <div className='flex flex-col items-center gap-4 relative flex-1 grow'>
        <div className='relative w-[41px] h-[45px]'>
          <Image
            src='/img/pdf.svg'
            alt='Upload Icon'
            width={41}
            height={45}
            className=''
          />
        </div>

        <div className='inline-flex flex-col items-center gap-2 relative w-full'>
          <div className="relative w-fit [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-gray-400 text-base tracking-[0] leading-[normal] whitespace-nowrap">
            {Math.round(progress)}%
          </div>

          <div className='relative w-full h-1.5 bg-gray-400 rounded-[13px]'>
            <div
              className='absolute h-1.5 bg-main-color rounded-[13px] top-0 left-0 transition-all'
              style={{
                width: `${progress}%`,
                transition: 'width 0.02s linear'
              }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
