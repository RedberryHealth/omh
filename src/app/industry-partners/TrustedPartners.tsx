import React from 'react';
import TrustedCard from './TrustedPartners/TrustedCard';

export default function TrustedPartners() {
  const cardsData = [
    {
      icon: '/img/trusted1.png',
      description: 'Secure and fast payment processing'
    },
    {
      icon: '/img/trusted2.png',
      description: 'Seamless POS integrations.'
    },
    {
      icon: '/img/trusted3.png',
      description: 'Solutions designed to scale with your business'
    }
  ];

  return (
    <div className='my-5 md:my-20 py-2 md:py-40 w-full max-w-[1280px] rounded-[25px] md:rounded-[50px] overflow-hidden border-2 border-solid border-[#e2e2e2] bg-gradient-radial'>
      <div className='flex flex-col md:flex-row lg:flex-row items-start gap-[40px] p-8'>
        {/* First section with title and description */}
        <div className='px-1 md:px-20 flex flex-col w-full md:w-1/2 items-start gap-[23px]'>
          <div className='flex flex-col items-start gap-2 w-full'>
            <div
              className='text-main-color 
            text-[#0c0e0f] text-[22px] sm:text-[22px] md:text-[35px] lg:text-[44px] font-bold font-Sora'>
              Our Trusted Partners
            </div>
          </div>

          <p className='font-normal text-[12px] md:text-lg text-[#0c0e0f] leading-[21.6px]'>
            At Odin Merchant Hub, we collaborate with leading global technology
            providers to bring you reliable, secure, and scalable payment
            solutions. Our partnerships allow us to offer industry-specific
            solutions that meet the diverse needs of businesses in various
            sectors.
          </p>
        </div>

        {/* Second section with card list */}
        <div className='flex flex-col w-full md:w-1/2 lg:w-1/2 items-start gap-[30px]'>
          <div
            className='text-main-color tracking-[-1.76px]
          text-[#0c0e0f] text-[22px] sm:text-[22px] md:text-[35px] lg:text-[44px] font-bold font-Sora'>
            What Our Partners Offer
          </div>

          <div className='flex flex-col items-start gap-[30px] w-full'>
            {cardsData.map((card, index) => (
              <TrustedCard
                key={index}
                iconSrc={card.icon}
                paragraphText={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
