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
}

const ServiceListVertical: React.FC<ServiceListProps> = ({ servicesData }) => {
  return (
    <div className='flex flex-col gap-10 w-full p-5'>
      {servicesData.map((service, index) => (
        <div key={index} className='flex flex-col w-full gap-5'>
          {/* Video Section */}
          <div className='relative w-full aspect-square bg-secondary-100 rounded-xl overflow-hidden'>
            <video
              className='w-full h-full object-cover'
              src={service.videoSrc}
              autoPlay
              loop
              muted
            />
          </div>

          {/* Service Content */}
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
              <div className='p-3 bg-main-color rounded-xl overflow-hidden'>
                <Image
                  className='w-6 h-6'
                  alt={service.title}
                  src={service.icon}
                  width={50}
                  height={50}
                />
              </div>

              <div className='font-semibold text-black text-[22px]'>
                {service.title}
              </div>
            </div>

            <p className='w-full text-[12px] font-normal text-second-background-color3'>
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceListVertical;
