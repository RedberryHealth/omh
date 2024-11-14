'use client';

import React from 'react';
import Image from 'next/image';
import { HiOutlineTrash } from 'react-icons/hi';

interface CompletedUploadProps {
  fileName: string;
  onClear: () => void;
}

export default function CompletedUpload({
  fileName,
  onClear
}: CompletedUploadProps) {
  return (
    <div className='flex h-[264px] items-center justify-center gap-3 px-6 py-7 relative self-stretch w-full bg-[#fff] rounded-2xl overflow-hidden border-[3px] border-dashed border-second-background-color3'>
      <div className='flex flex-col items-center gap-4 relative flex-1 grow'>
        <div className='relative w-[60px] h-[60px] '>
          <Image
            src='/img/completed.svg'
            alt='Cloud Upload Icon'
            width={60}
            height={60}
            className=''
          />
        </div>

        <div className='my-2 inline-flex flex-col items-center gap-2 relative w-full'>
          <div className='w-full max-w-[352px] h-4'>
            <div className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#000] text-sm text-center tracking-[0] leading-[normal]">
              Uploading Document...
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
