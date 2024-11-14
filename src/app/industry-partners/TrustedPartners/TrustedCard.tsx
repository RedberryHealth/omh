import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

interface CardProps {
  iconSrc: string; // Icon source as a string
  paragraphText: string; // Paragraph text as a string
}

const TrustedCard: React.FC<CardProps> = ({ iconSrc, paragraphText }) => {
  return (
    <div className='flex w-full max-w-[566px] items-center gap-[23px] relative flex-[0_0_auto]'>
      <div className='relative w-12 h-12 bg-[#f7f7f7] rounded-[48px]'>
        <Image
          className='absolute w-[29px] h-[29px] top-2.5 left-2.5 object-cover'
          alt='Icon'
          src={iconSrc} // Dynamic icon passed via props
          width={32}
          height={32}
        />
      </div>

      <div className='w-full max-w-[497px] mr-[-2.00px] relative h-[25px]'>
        <p className="absolute h-[25px] top-0 left-0 [font-family:'Sora-SemiBold',Helvetica] font-semibold text-[#000000] text-[14px] md:text-xl tracking-[0.20px] leading-[normal]">
          {paragraphText} {/* Dynamic text passed via props */}
        </p>
      </div>
    </div>
  );
};

export default TrustedCard;
