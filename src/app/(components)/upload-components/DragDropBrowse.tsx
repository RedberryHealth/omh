'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

interface DragDropBrowseProps {
  onFileSelect: (file: File) => void;
}

export default function DragDropBrowse({ onFileSelect }: DragDropBrowseProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      onFileSelect(event.target.files[0]);
    }
  };

  return (
    <div
      className='flex h-[264px] items-center justify-center gap-3 px-6 py-7 relative self-stretch w-full bg-[#fff] rounded-2xl overflow-hidden border-[3px] border-dashed border-second-background-color3'
      onDrop={handleFileDrop}
      onDragOver={handleDragOver}>
      <div className='flex flex-col items-center gap-4 relative flex-1 grow'>
        <div className='relative w-14 h-14 bg-second-background-color4 rounded-[28px]'>
          <div className='!absolute !w-7 !h-7 !top-3.5 !left-3.5'>
            <Image
              src='/img/cloud-upload.svg'
              alt='Cloud Upload Icon'
              width={28}
              height={28}
              className=''
            />
          </div>
        </div>

        <div className='flex flex-col items-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]'>
          <div className='flex items-center justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]'>
            <div className='items-start rounded-lg inline-flex flex-col justify-center gap-2.5 relative flex-[0_0_auto] overflow-hidden'>
              <div className='inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]'>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-main-color text-sm text-center tracking-[0] leading-[20.3px] whitespace-nowrap">
                  Click to upload
                </div>
              </div>
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-second-background-color3 text-sm tracking-[0] leading-[20.3px] whitespace-nowrap">
              or drag and drop
            </div>
          </div>

          <p className="relative self-stretch [font-family:'Roboto-Regular',Helvetica] font-normal text-second-background-color3 text-xs text-center tracking-[0] leading-[17.4px]">
            CVV, Excel, Text or PDF (max. 800x400px)
          </p>
        </div>

        <div className='relative self-stretch w-full h-6'>
          <div className='relative w-[352px] h-[17px] top-1'>
            <div className='absolute w-[352px] h-px top-2 left-0 bg-gray-400' />

            <div className='inline-flex items-start px-2 py-0 absolute top-0 left-40 bg-[#fff]'>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-gray-400 text-xs text-center tracking-[0] leading-[17.4px] whitespace-nowrap">
                OR
              </div>
            </div>
          </div>
        </div>

        <div className='items-center bg-main-color px-4 py-2 rounded-md inline-flex flex-col justify-center gap-2.5 relative flex-[0_0_auto] overflow-hidden'>
          <div className='inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]'>
            <button
              className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#ffffff] text-sm text-center tracking-[0] leading-5 whitespace-nowrap"
              onClick={() => fileInputRef.current?.click()}>
              Browse Files
            </button>
            <input
              type='file'
              ref={fileInputRef}
              className='hidden'
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
