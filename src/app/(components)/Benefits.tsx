// Benefits.tsx
import React from 'react';
import BenefitCard from './BenefitCard'; // Adjust the import path as necessary

export interface Benefit {
  image: string;
  title: string;
  description: string;
}

interface BenefitsProps {
  heading: string;
  description: string;
  cardsData: Benefit[];
}

const Benefits: React.FC<BenefitsProps> = ({
  heading,
  description,
  cardsData
}) => {
  return (
    <div className='flex flex-col items-center gap-[57px] relative'>
      <div className='flex flex-col w-[95%] max-w-[849px] items-center gap-[17px]'>
        <p className="relative [font-family:'Sora-Bold',Helvetica] font-bold text-main-color text-[35px] md:text-[45px] text-center tracking-[0] leading-[normal]">
          {heading}
        </p>
        <p className="relative self-stretch [font-family:'Roboto-Medium',Helvetica] font-medium text-contrust-color4 text-[16px] md:text-[20px] text-center tracking-[0] leading-[normal]">
          {description}
        </p>
      </div>

      <div className='flex flex-wrap justify-center items-start gap-8 w-full'>
        {cardsData.map((card, index) => (
          <BenefitCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            index={0}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
