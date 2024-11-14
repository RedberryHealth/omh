import React from 'react';

interface StatsCardProps {
  number: string;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ number, label }) => (
  <div className='w-full flex-col justify-start items-center gap-3 inline-flex bg-white p-6 '>
    <div className='text-center text-main-color text-[44px] font-bold font-Sora'>
      {number}
    </div>
    <div className='text-center text-black text-lg font-normal font-Roboto'>
      {label}
    </div>
  </div>
);

const BusinessStats: React.FC = () => {
  const statsData = [
    { number: '100+', label: 'Businesses Helped' },
    { number: '3+', label: 'Trusted Partners' },
    { number: '10k+', label: 'Active Clients' },
    { number: '50+', label: '5-star reviews' }
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center items-center'>
      {statsData.map((stat, index) => (
        <StatsCard key={index} number={stat.number} label={stat.label} />
      ))}
    </div>
  );
};

export default BusinessStats;
