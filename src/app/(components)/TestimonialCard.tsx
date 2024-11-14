import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: string;
  imageSrc: string;
  name: string;
  title: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  imageSrc,
  name,
  title
}) => {
  return (
    <div className='flex flex-col w-[360px] h-[348px] items-center gap-[37px] px-[30px] py-10 relative bg-dark-yellow-transperant rounded-[21px]'>
      <p className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-contrust-color4 text-base text-center tracking-[0] leading-[34px]">
        {testimonial}
      </p>
      <div className='inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto]'>
        <Image
          className='relative w-[50px] h-[50px] object-cover'
          alt='Ellipse'
          src={imageSrc}
          width={50}
          height={50}
        />
        <div className="relative w-fit [font-family:'Roboto',Helvetica] font-semibold text-contrust-color4 text-lg tracking-[0] leading-[normal] whitespace-nowrap">
          {name}
        </div>
        <div className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-custom-contrust-color text-sm tracking-[0] leading-[normal] whitespace-nowrap">
          {title}
        </div>
      </div>
    </div>
  );
};
