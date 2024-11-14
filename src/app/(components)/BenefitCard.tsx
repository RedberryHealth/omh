import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component

interface BenefitCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  image,
  title,
  description,
  index
}) => {
  return (
    <div
      key={index}
      className='relative w-96 h-[339px] bg-main-background-color rounded-[21px] border-4 border-solid border-gray-dark'>
      <div className='w-64 gap-[22px] top-16 left-16 flex flex-col items-start relative'>
        <div className='flex max-w-[371.16px] w-[53px] h-[53px] items-center justify-center relative rounded-2xl overflow-hidden [background:linear-gradient(180deg,rgb(77,223,156)_0%,rgba(100,83,238,0.94)_100%)]'>
          <Image
            className='relative'
            alt='Benefit Icon'
            src={image}
            width={32} // Define the width
            height={32} // Define the height
            objectFit='cover' // Adjust the fit if needed
          />
        </div>
        <div className='gap-[19px] self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative'>
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Sora-SemiBold',Helvetica] font-semibold text-contrust-color4 text-2xl tracking-[0] leading-[normal]">
            {title}
          </div>
          <div className='flex items-start pl-0 pr-[22px] py-0 relative self-stretch w-full flex-[0_0_auto]'>
            <p className="relative w-64 mt-[-1.00px] mr-[-22.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-custom-contrust-color3 text-base tracking-[0.30px] leading-6">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
