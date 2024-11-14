import React from 'react';
import Image from 'next/image'; // Import Image component and StaticImageData for type

interface CardProps {
  iconImage: string; // Allow both string URLs and StaticImageData
  title: string;
  description: string;
}

const InfoCard: React.FC<CardProps> = ({ iconImage, title, description }) => {
  return (
    <div className='bg-[#fff] w-[404px] h-[225px] pl-9 pr-[37px] pt-[49px] pb-12 bg-main-background-color rounded-xl border-2 border-[#eaeaea] justify-center items-center inline-flex'>
      <div className='grow shrink basis-0 self-stretch flex-col justify-start items-start gap-[13px] inline-flex'>
        <div className='w-12 h-12 pl-2.5 pr-[9.25px] pt-2.5 pb-[9.25px] bg-[#f7f7f7] rounded-[48px] justify-center items-center inline-flex'>
          <Image
            className='w-[28.75px] h-[28.75px]'
            alt='Icon'
            src={iconImage} // Dynamic icon image passed via props
            width={29}
            height={29}
          />
        </div>
        <div className='self-stretch h-[67px] flex-col justify-start items-start gap-3 flex'>
          <div className='text-black text-lg font-semibold font-Sora'>
            {title} {/* Dynamic title passed via props */}
          </div>
          <div className='self-stretch text-[#7f7f7f] text-sm font-normal font-Roboto tracking-tight'>
            {description} {/* Dynamic description passed via props */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
