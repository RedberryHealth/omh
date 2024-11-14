'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { TestimonialCard } from './TestimonialCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Thinner arrow icons

// Define the props type for ArrowButton
interface ArrowButtonProps {
  onClick?: () => void;
  direction: 'left' | 'right';
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick, direction }) => (
  <button
    className={`m-0 sm:m-0 md:m-1 rounded-lg bg-main-color1 text-contrust-color4 flex items-center justify-center`} // Flexbox for centering
    style={{ width: '50px', height: '50px' }} // Increased size for the button
    onClick={onClick}>
    {direction === 'left' ? (
      <FiChevronLeft size={28} /> // Increased icon size
    ) : (
      <FiChevronRight size={28} /> // Increased icon size
    )}
  </button>
);

// Define types for the testimonial object
interface Testimonial {
  testimonial: string;
  imageSrc: string;
  name: string;
  title: string;
}

// Define types for the props
interface ITestmonialCarasoul {
  heading: string;
  description: string;
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<ITestmonialCarasoul> = ({
  heading,
  description,
  testimonials
}): JSX.Element => {
  // Create a ref for the Slider component
  const sliderRef = useRef<Slider | null>(null);

  // Slick carousel settings
  const settings = {
    dots: false, // No dots under the carousel
    infinite: false, // Do not loop infinitely
    speed: 500, // Speed of the slide transition
    slidesToShow: 3, // Show 3 full cards on large screens
    slidesToScroll: 1, // Move one card at a time
    arrows: false, // Disable default arrows since we are using custom ones
    responsive: [
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2, // Show 2 cards on medium screens
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640, // For small screens
        settings: {
          slidesToShow: 1, // Show 1 card on small screens
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-full h-auto bg-main-background-color overflow-hidden'>
      <div className='relative w-full bg-diagonal-opacity py-20'>
        <div className='flex items-start justify-between px-4 mb-4'>
          {' '}
          {/* Align items to the left and add margin */}
          <div className='flex flex-col items-start'>
            <p className="relative w-fit mt-[-1.00px] [font-family:'Sora',Helvetica] font-bold text-main-color text-[30px] sm:text-[30px] md:sm:text-[45px] tracking-[0] leading-[normal]">
              {heading}
            </p>
            <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-contrust-color4 text-[12px] md:text-[16px] tracking-[0] leading-[normal]">
              {description}
            </p>
          </div>
          <div className='hidden md:flex flex-[0_0_auto]'>
            {' '}
            {/* Show buttons only on md and lg screens */}
            <ArrowButton
              direction='left'
              onClick={() => sliderRef.current?.slickPrev()}
            />
            <ArrowButton
              direction='right'
              onClick={() => sliderRef.current?.slickNext()}
            />
          </div>
        </div>

        {/* Carousel container */}
        <div className='relative w-full'>
          <Slider {...settings} ref={sliderRef}>
            {testimonials && testimonials.length > 0 ? (
              testimonials.map((testimonial, index) => (
                <div key={index} className='px-4'>
                  <TestimonialCard
                    testimonial={testimonial.testimonial}
                    imageSrc={testimonial.imageSrc}
                    name={testimonial.name}
                    title={testimonial.title}
                  />
                </div>
              ))
            ) : (
              <p className='text-contrust-color4'>No testimonials available.</p>
            )}
          </Slider>
        </div>

        {/* Custom navigation buttons for small screens */}
        <div className='flex justify-center mt-4 gap-4 md:hidden'>
          {' '}
          {/* Show only for small screens */}
          <ArrowButton
            direction='left'
            onClick={() => sliderRef.current?.slickPrev()}
          />
          <ArrowButton
            direction='right'
            onClick={() => sliderRef.current?.slickNext()}
          />
        </div>
      </div>
    </div>
  );
};
