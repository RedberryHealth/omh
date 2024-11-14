'use client'; // Ensures the component is rendered as a Client Component

import React, { useState } from 'react';
import InfoCard from './InfoCard';
import AssesoSubmitForm from './AssesoSubmitForm ';
import RepayNoForm from './repayNoform';

const TechnologyAssessor = (): JSX.Element => {
  const [data, setData] = useState([
    {
      cardText: 'What type of business do you operate?',
      selectOptions: [
        'Retail (In-store)',
        'E-commerce',
        'ISV (Independent Software Vendor)',
        'Healthcare',
        'Food & Beverage',
        'Other'
      ],
      answer: ''
    },
    {
      cardText: 'What is your business’s annual revenue?',
      selectOptions: [
        'Less than $250K',
        '$250K – $1M',
        '$5M – $10M',
        'Over $10M'
      ],
      answer: ''
    },
    {
      cardText: 'What payment methods do you accept or want to accept?',
      selectOptions: [
        'Credit/Debit Cards',
        'ACH Payments',
        'Contactless Payments (NFC, Mobile Wallets)',
        'Cryptocurrency',
        'International Payments',
        'Buy Now, Pay Later (BNPL)',
        'Other'
      ],
      answer: ''
    },
    {
      cardText: 'How do you primarily process payments?',
      selectOptions: [
        'In-store (POS system)',
        'Online (e-commerce gateway)',
        'Mobile payments (through app or mobile device)',
        'Subscription/Recurring Billing',
        'Mixed (In-store & Online)'
      ],
      answer: ''
    },
    {
      cardText:
        'Do you require any additional features for your payment processing?',
      selectOptions: [
        'Advanced Fraud Detection',
        'Chargeback Management',
        'Payment Analytics and Reporting',
        'Multi-Currency Support',
        'PCI Compliance Tools',
        'Loyalty Programs and Gift Cards',
        'None of the above'
      ],
      answer: ''
    },
    {
      cardText: 'Are you currently using a payment processor?',
      selectOptions: ['Yes', 'No'],
      answer: ''
    },
    {
      cardText: 'If yes, which payment processor are you using?',
      selectOptions: [
        'CardConnect',
        'Global Payments',
        'Stripe',
        'PayPal',
        'Square',
        'Worldpay',
        'Authorize.Net',
        'Adyen',
        'Braintree',
        'Other (please specify)'
      ],
      answer: ''
    },
    {
      cardText:
        'Are you looking to integrate your payment processing with other systems?',
      selectOptions: [
        'Accounting Software (e.g., QuickBooks, Xero)',
        'CRM Systems (e.g., HubSpot, Salesforce)',
        'POS System',
        'E-commerce Platform (e.g., Shopify, WooCommerce)',
        'Custom Integration',
        'No integration needed'
      ],
      answer: ''
    },
    {
      cardText: 'What is your business’s most important priority?',
      selectOptions: [
        'Lower transaction fees',
        'Security & Compliance',
        'Advanced technology features (AI, analytics)',
        'Integration with existing systems',
        'Global reach & scalability'
      ],
      answer: ''
    },
    {
      cardText:
        'Would you like to schedule a consultation with our experts to discuss your payment needs further?',
      selectOptions: ['Yes', 'No'],
      answer: ''
    }
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = data.length;
  const [showFinalForm, setShowFinalForm] = useState<
    'AssesoSubmitForm' | 'RepayNoForm' | null
  >(null); // Track which form to show

  const handleNext = () => {
    if (data[currentStep].answer !== '') {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      } else if (currentStep === totalSteps - 1) {
        // Evaluate the answer to the last question
        const lastAnswer = data[currentStep].answer;
        if (lastAnswer === 'Yes') {
          setShowFinalForm('AssesoSubmitForm');
        } else if (lastAnswer === 'No') {
          setShowFinalForm('RepayNoForm');
        }
      }
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  const handlePrevious = () => {
    if (showFinalForm) {
      setShowFinalForm(null); // Go back to the last step if the form is shown
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleOptionSelect = (option: string) => {
    // Update the answer for the current step
    const updatedData = [...data];
    updatedData[currentStep].answer = option;
    setData(updatedData);
  };

  return (
    <div className='mt-32 py-10 w-full h-auto bg-main-background-color'>
      <div className='flex flex-col w-full lg:w-[1280px] items-start gap-[18px] px-4 md:px-10 lg:mx-auto'>
        {/* Title Section */}
        <div className='flex flex-col items-start gap-5 w-full'>
          <div className='font-bold text-[#0c0e0f] text-[28px] md:text-[36px] lg:text-[44px]'>
            Technology Assessor
          </div>
        </div>

        {/* Paragraph Section */}
        <p className='font-normal text-[#0c0e0f] text-base md:text-lg'>
          Fill the form, experts will guide you to the best payment solution for
          your business.
        </p>

        {/* Conditional Rendering of Final Forms */}
        {showFinalForm === 'AssesoSubmitForm' ? (
          <AssesoSubmitForm />
        ) : showFinalForm === 'RepayNoForm' ? (
          <RepayNoForm />
        ) : (
          <>
            {/* InfoCard Section */}
            <div className='flex justify-center w-full'>
              <InfoCard
                step={currentStep + 1}
                totalSteps={totalSteps}
                cardText={data[currentStep].cardText}
                selectOptions={data[currentStep].selectOptions}
                selectedAnswer={data[currentStep].answer}
                onSelectOption={handleOptionSelect}
              />
            </div>

            {/* Navigation Buttons */}
            <div className='flex justify-between mt-6 w-full'>
              <button
                className={`px-4 py-2 rounded-lg ${
                  currentStep === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-500 text-white cursor-pointer hover:bg-blue-600'
                }`}
                onClick={handlePrevious}
                disabled={currentStep === 0}>
                Previous
              </button>
              <button
                className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                onClick={handleNext}
                disabled={
                  currentStep === totalSteps - 1 &&
                  data[currentStep].answer === ''
                }>
                {currentStep === totalSteps - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          </>
        )}

        {/* Show Previous button in the final form */}
        {showFinalForm && (
          <div className='flex justify-center mt-6 w-full'>
            <button
              className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
              onClick={handlePrevious}>
              Previous
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnologyAssessor;
