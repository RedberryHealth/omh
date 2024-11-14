'use client';
import React from 'react';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';
interface TopFiveProps {
  title: string;
  badges: string[];
  badgesColors: string[];
  mainImage: string;
  introduction: string;
  quote: string;
  author: string;
  sectionTitle: string;
  sectionContent: string;
  additionalImage: string;
  conclusion: string;
  intro: string;
}

export const BlogCard: React.FC<TopFiveProps> = ({
  title,
  badges,
  badgesColors,
  mainImage,
  introduction,
  quote,
  author,
  sectionTitle,
  sectionContent,
  additionalImage,
  conclusion,
  intro
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Finance');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className='relative mt-24 bg-[#ffffff] flex flex-col justify-center w-full'>
      {/* Full width section with badges and first image */}
      <div className='w-full bg-[#ffffff]'>
        <div className='flex flex-col items-center py-10'>
          <h1 className='text-4xl sm:text-5xl font-sora font-bold text-center text-contrust-color4'>
            {title}
          </h1>

          {/* Badges */}
          <div className='inline-flex gap-3 mt-6 flex-wrap justify-center'>
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`${badgesColors[index]} px-3 py-1 rounded-full text-sm`}>
                {badge}
              </span>
            ))}
          </div>

          {/* Main Image */}
          <div
            className='w-[95%] max-w-[1440px] h-[650px] mt-8 bg-cover bg-center rounded-[30px]'
            style={{
              backgroundImage: `url(${mainImage})` // Dynamically set the background image
            }}></div>
        </div>
      </div>

      {/* Three-column layout */}
      <div className='px-5 flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-10 gap-8'>
        {/* Left Column (20%) */}
        <div className='md:w-[20%] w-full flex flex-col items-start'>
          <div className='w-full whitespace-nowrap'>
            <button
              onClick={toggleDropdown}
              className='w-full flex justify-between items-center px-12 py-5 border rounded-full border-gray-400 text-black'>
              {selectedOption}
              <span className='ml-2'>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <ul className='text-contrust-color4 w-full mt-2 bg-main-background-color border border-gray-300 rounded-lg shadow-lg z-50'>
                <li
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                  onClick={() => handleOptionClick('Finance')}>
                  Finance
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap'
                  onClick={() => handleOptionClick('Business growth')}>
                  Business growth
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                  onClick={() => handleOptionClick('Technology')}>
                  Technology
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Center Column (60%) */}
        <div className='md:w-[60%] w-full flex flex-col gap-8'>
          {/* Introduction */}
          <h2 className='text-2xl font-semibold text-contrust-color4 mb-4'>
            {intro}
          </h2>
          <div className='text-lg leading-7 text-gray-700 text-justify'>
            {introduction}
          </div>

          {/* Additional Image */}
          <div className='w-full'>
            <Image
              src={additionalImage}
              alt='Additional Image'
              width={1282}
              height={476}
              className='object-cover w-full h-auto'
            />
          </div>

          {/* Quote Section */}
          <div className='flex flex-col items-start border-l-4 border-indigo-500 pl-4'>
            <blockquote className='italic text-xl text-gray-800 text-justify'>
              {quote}
            </blockquote>
            <cite className='font-medium text-gray-700'>{author}</cite>
          </div>

          {/* Conclusion */}
          <div>
            <p className='text-gray-700 leading-7 text-justify'>{conclusion}</p>
          </div>

          {/* Section Title and Content */}
          <div>
            <h2 className='text-2xl font-semibold text-contrust-color4 mb-4'>
              {sectionTitle}
            </h2>
            <p className='text-gray-700 leading-7 text-justify'>
              {sectionContent}
            </p>
          </div>
        </div>

        {/* Right Column (20%) - Empty for now */}
        <div className='md:w-[20%] w-full'></div>
      </div>
    </div>
  );
};
