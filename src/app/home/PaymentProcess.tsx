import React from 'react';
import InfoCard from './PaymentProcess/InfoCard';

interface CardData {
  iconImage: string;
  title: string;
  description: string;
}

const cardsData: CardData[] = [
  {
    iconImage: '/img/needs.png', // Replace with actual image path
    title: 'Expert Consulting Services',
    description:
      'Our experts guide you in selecting the best payment processor for your specific business needs'
  },
  {
    iconImage: '/img/model.png', // Replace with actual image path
    title: 'Customized Payment Solutions',
    description:
      'We offer tailored solutions that fit your industry and business model.'
  },
  {
    iconImage: '/img/solutions.png', // Replace with actual image path
    title: 'Global Payment Processing',
    description:
      'Expand your payment capabilities with our global partnerships and solutions.'
  },
  {
    iconImage: '/img/guidance.png', // Replace with actual image path
    title: 'Risk Management',
    description:
      'Navigate payment processing regulations and reduce risks with our expert guidance.'
  },
  {
    iconImage: '/img/smoothly.png', // Replace with actual image path
    title: 'Integration and Support',
    description:
      'We provide seamless integration and ongoing support to ensure your payment operations run smoothly.'
  },
  {
    iconImage: '/img/efficiency.png', // Replace with actual image path
    title: 'Cost Savings and Optimization',
    description:
      'Our consulting services help you reduce costs and optimize payment processes for efficiency.'
  }
];

const PaymentProcess: React.FC = () => {
  return (
    <div className='container mx-auto py-8'>
      {/* Responsive Grid layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cardsData.map((card, index) => (
          <InfoCard
            key={index}
            iconImage={card.iconImage}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentProcess;
