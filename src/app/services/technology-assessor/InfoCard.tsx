import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import CircleProgress from './CircleProgress';

interface InfoCardProps {
  cardText: string;
  step: number;
  totalSteps: number;
  selectOptions: string[];
  selectedAnswer: string;
  onSelectOption: (option: string) => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  cardText,
  step,
  totalSteps,
  selectOptions,
  selectedAnswer,
  onSelectOption
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onSelectOption(option); // Set selected option text
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div
      className={`flex flex-col w-full lg:w-[1280px] items-start gap-10 p-8 bg-[#ffffff] rounded-[20px] md:rounded-[25px] lg:rounded-[31.23px] shadow-lg lg:shadow-xl transition-all duration-300 ${
        isDropdownOpen ? 'h-[700px]' : 'h-[350px]'
      }`}>
      <div className='flex flex-col items-start gap-2 relative self-stretch w-full'>
        <div className='relative self-stretch mt-[-1.00px] font-semibold text-black text-base md:text-lg tracking-[0] leading-[normal]'>
          Fill the following information
        </div>

        <p className='relative self-stretch font-normal text-second-background-color3 text-sm md:text-base tracking-[0] leading-[normal]'>
          {cardText}
        </p>
      </div>

      {/* Step Indicator with Circle Progress */}
      <div className='flex items-center gap-[13px] relative'>
        <CircleProgress step={step} totalSteps={totalSteps} />
        <div className='w-fit font-semibold text-black text-base md:text-lg leading-[normal] relative tracking-[0]'>
          Step {step}/{totalSteps}
        </div>
      </div>

      {/* Select Dropdown */}
      <div className='relative w-full'>
        <div
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className='flex items-center gap-2 px-4 py-3 w-full bg-main-background-color rounded-xl border-[1.5px] border-solid border-secondary shadow-md cursor-pointer'>
          <div className='flex-1 text-sm leading-6 text-second-background-color3'>
            {selectedAnswer || 'Select'}
          </div>
          <div className='w-5 h-5'>
            {isDropdownOpen ? (
              <FaChevronUp className='w-5 h-5' />
            ) : (
              <FaChevronDown className='w-5 h-5' />
            )}
          </div>
        </div>

        {/* Dropdown Options */}
        {isDropdownOpen && (
          <ul className='absolute z-50 w-full mt-1 bg-main-background-color rounded-xl shadow-lg border border-gray-300 max-h-60 overflow-y-auto'>
            {selectOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className='px-4 py-2 cursor-pointer hover:bg-gray-100 text-second-background-color3'>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Adding bottom padding for spacing */}
      <div className='pb-10' />
    </div>
  );
};

export default InfoCard;
