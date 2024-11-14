import React from 'react';
interface Service {
  Paragraph: string;
  SubPargraph: string;
  Video: string;
}

interface ServiceListProps {
  servicesData: Service[];
}

const IndustryServeCardListVertical: React.FC<ServiceListProps> = ({
  servicesData
}) => {
  return (
    <div className='flex flex-col gap-10 w-full p-5'>
      {servicesData.map((service, index) => (
        <div key={index} className='flex flex-col w-full gap-5'>
          {/* Video Section */}
          <div className='relative w-full aspect-square bg-secondary-100 rounded-xl overflow-hidden'>
            <video
              className='w-full h-full object-cover'
              src={service.Video}
              autoPlay
              loop
              muted
            />
          </div>

          {/* Service Content */}
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
              <div className='font-semibold text-black text-[22px]'>
                {service.Paragraph}
              </div>
            </div>

            <p className='w-full text-[12px] font-normal text-second-background-color3'>
              {service.SubPargraph}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustryServeCardListVertical;
