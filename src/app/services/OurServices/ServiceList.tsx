import React from 'react';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  icon: string;
  videoSrc: string;
}

interface ServiceListProps {
  servicesData: Service[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const ServiceList: React.FC<ServiceListProps> = ({
  servicesData,
  activeIndex,
  setActiveIndex
}) => {
  return (
    <div className='inline-flex items-center gap-[109px] relative flex-[0_0_auto]'>
      {/* Service Cards */}
      <div className='flex flex-col w-1/2 max-w-[497px] items-start gap-[35px] relative'>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`flex items-start gap-8 relative self-stretch 
              w-full flex-[0_0_auto] cursor-pointer ${
                index === activeIndex ? 'border-l-[6px] border-main-color' : ''
              }`}
            onClick={() => setActiveIndex(index)}>
            {index === activeIndex && (
              <div className='relative w-1 h-[97px] bg-main-color rounded-[100px]' />
            )}

            <div
              className={`inline-flex flex-col items-start justify-center gap-2.5 p-[13px] relative flex-[0_0_auto] bg-main-color rounded-xl overflow-hidden ${
                index === activeIndex ? 'border-l-[6px] border-main-color' : ''
              }`}>
              <Image
                className='!relative !w-6 !h-6'
                alt={service.title}
                src={service.icon}
                width={50}
                height={50}
              />
            </div>

            <div className='inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]'>
              <div className='relative w-fit mt-[-1.00px] font-semibold text-black text-[22px]'>
                {service.title}
              </div>

              <p className='relative w-[415px] font-normal text-second-background-color3'>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className='relative w-[50%] max-w-[608px] h-[620px] bg-secondary-100 rounded-xl overflow-hidden'>
        <video
          className='h-full object-cover bg-[#6453ee1a]'
          src={servicesData[activeIndex].videoSrc}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default ServiceList;
