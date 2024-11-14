'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ThreeBlogs from './ThreeBlogs';

// Original Blog Data (First Set)
const firstBlog = {
  image: '/img/sidebar-1.jpeg',
  title: 'Top 5 Trends in Payment Processing',
  link: '/blogs/top-5',
  description:
    'How do you create compelling presentations that wow your colleagues and impress your managers?',
  tags: [
    { text: 'Retail', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
    { text: 'Fintech', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
    {
      text: 'Financial growth',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-600'
    }
  ]
};

const secondBlog = {
  image: '/img/sidebar-2.jpeg',
  title: 'Why Modern POS Systems Are Essential for Retail Growth',
  link: '/blogs/why-modern',
  description:
    'Linear helps streamline software projects, sprints, tasks, and bug Letter spacing. Here’s how to get...',
  tags: [
    { text: 'Business', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
    { text: 'Technology', bgColor: 'bg-pink-100', textColor: 'text-pink-600' }
  ]
};

const thirdBlog = {
  image: '/img/sidebar-3.jpeg',
  title: 'Business',
  link: '/blogs/business',
  description:
    'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing APIs...',
  tags: [
    { text: 'Business', bgColor: 'bg-green-100', textColor: 'text-green-600' },
    { text: 'Growth', bgColor: 'bg-pink-100', textColor: 'text-pink-600' }
  ]
};

// Fake Blog Data (Second Set)
const firstFakeBlog = {
  image: '/img/how-bg.png',
  title: 'How to Reduce Payment Fees for Your Business',
  link: '/blogs/how-to-reduce',
  description: 'Strategies and tips for scaling your e-commerce business.',
  tags: [
    {
      text: 'E-commerce',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600'
    },
    { text: 'Growth', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' }
  ]
};

const secondFakeBlog = {
  image: '/img/how-bg.png',
  title: 'How to Reduce Payment Fees for Your Business',
  link: '/blogs/how-to-reduce',
  description: 'How AI is transforming the retail industry.',
  tags: [
    { text: 'AI', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
    { text: 'Retail', bgColor: 'bg-blue-100', textColor: 'text-blue-600' }
  ]
};

const thirdFakeBlog = {
  image: '/img/how-bg.png',
  title: 'How to Reduce Payment Fees for Your Business',
  link: '/blogs/how-to-reduce',
  description: 'The latest trends and innovations in the fintech industry.',
  tags: [
    { text: 'Fintech', bgColor: 'bg-green-100', textColor: 'text-green-600' },
    { text: 'Technology', bgColor: 'bg-pink-100', textColor: 'text-pink-600' }
  ]
};

// Another Fake Blog Data (Third Set)
const firstThirdFakeBlog = {
  image: '/img/third-fake-sidebar-1.jpeg',
  title: 'The Evolution of Cloud Computing',
  link: '/cloud-evolution',
  description: 'How cloud computing is changing the way we do business.',
  tags: [
    { text: 'Cloud', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
    { text: 'Computing', bgColor: 'bg-green-100', textColor: 'text-green-600' }
  ]
};

const secondThirdFakeBlog = {
  image: '/img/third-fake-sidebar-2.jpeg',
  title: 'SaaS Solutions for Small Businesses',
  link: '/saas-small-business',
  description: 'Top SaaS solutions to help small businesses thrive.',
  tags: [
    { text: 'SaaS', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' },
    {
      text: 'Small Business',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    }
  ]
};

const thirdThirdFakeBlog = {
  image: '/img/third-fake-sidebar-3.jpeg',
  title: 'Blockchain and Cryptocurrency',
  link: '/blockchain-crypto',
  description: 'Understanding the impact of blockchain and cryptocurrency.',
  tags: [
    {
      text: 'Blockchain',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600'
    },
    { text: 'Cryptocurrency', bgColor: 'bg-red-100', textColor: 'text-red-600' }
  ]
};

// SideBarBlog Component
export const SideBarBlog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Finance');
  const [currentBlogs, setCurrentBlogs] = useState([
    firstBlog,
    secondBlog,
    thirdBlog
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);

    // Update the blog set based on the selected option
    if (option === 'Finance') {
      setCurrentBlogs([firstBlog, secondBlog, thirdBlog]);
    } else if (option === 'Business growth') {
      setCurrentBlogs([firstFakeBlog, secondFakeBlog, thirdFakeBlog]);
    } else if (option === 'Technology') {
      setCurrentBlogs([
        firstThirdFakeBlog,
        secondThirdFakeBlog,
        thirdThirdFakeBlog
      ]);
    }
  };

  return (
    <div className='w-full my-60 h-auto flex flex-col items-center justify-center bg-main-background-color rounded-[35px]'>
      <div className='py-20 relative w-full'>
        <div className='z-20 absolute left-5'>
          <button
            onClick={toggleDropdown}
            className='w-full flex justify-between items-center px-8 py-5 border rounded-full border-gray-400 text-black'>
            {selectedOption}
            <span className='ml-2'>
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <ul className='absolute text-contrust-color4 w-full mt-2 bg-main-background-color border border-gray-300 rounded-lg shadow-lg z-50'>
              <li
                className='px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap'
                onClick={() => handleOptionClick('Finance')}>
                Finance
              </li>
              <li
                className='px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap'
                onClick={() => handleOptionClick('Business growth')}>
                Business growth
              </li>
              <li
                className='px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap'
                onClick={() => handleOptionClick('Technology')}>
                Technology
              </li>
            </ul>
          )}
        </div>

        {/* Title (absolutely centered) */}
        <div className='z-10 absolute left-1/2 transform -translate-x-1/2 text-center'>
          <div className="h-[39px] mt-20 md:mt-0 [font-family:'Sora-Bold',Helvetica] font-bold text-[#0c0e0f] text-[25px] md:text-[31.3px] tracking-[0] leading-[normal]">
            Trending Topics
          </div>
        </div>
      </div>

      {/* Render ThreeBlogs with the currentBlogs data */}
      <ThreeBlogs
        firstBlog={currentBlogs[0]}
        secondBlog={currentBlogs[1]}
        thirdBlog={currentBlogs[2]}
      />
    </div>
  );
};
