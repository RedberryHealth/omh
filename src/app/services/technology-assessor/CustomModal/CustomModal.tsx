import React from 'react';
import Image from 'next/image';

interface CustomModalProps {
  closeModal: () => void; // Prop to close the modal
  buttonText: string; // Prop for the button text
  title: string; // Prop for the modal title
  paragraph: string; // Prop for the modal paragraph
}

export const CustomModal = ({
  closeModal,
  buttonText,
  title,
  paragraph
}: CustomModalProps): JSX.Element => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-contrust-color4 bg-opacity-50 z-50'>
      {/* Modal Content */}
      <div
        className='flex flex-col w-full max-w-[400px] h-auto items-center gap-8 px-6 py-6
       sm:px-10 sm:py-8 md:gap-10 md:max-w-[500px] lg:max-w-[600px] bg-main-background-color rounded-xl overflow-hidden z-10'>
        <div className='flex flex-col items-center gap-6 relative self-stretch w-full'>
          {/* Odin Image using Next.js Image component */}
          <Image
            className='relative'
            src={'/img/odin-01-1.svg'}
            alt='Odin'
            width={60}
            height={45}
            priority
          />

          {/* Dynamic Title */}
          <div className='font-semibold text-black text-lg sm:text-xl md:text-2xl text-center'>
            {title}
          </div>

          {/* Dynamic Paragraph */}
          <p className='font-normal text-second-background-color3 text-sm sm:text-base text-center'>
            {paragraph}
          </p>
        </div>

        {/* Dynamic Button */}
        <button
          className='flex w-full max-w-[268px] sm:max-w-[300px] md:max-w-[350px] h-[51px] 
        items-center justify-center bg-main-color text-white rounded-full overflow-hidden border border-transparent'
          onClick={closeModal}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
