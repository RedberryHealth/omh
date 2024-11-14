import React, { useState } from 'react';
import {
  // useDispatch,
  useSelector
} from 'react-redux';
// import { AppDispatch } from '@/redux/store';
import {
  // submitSubscription,
  selectSubscriptionStatus,
  selectSubscriptionError,
  selectSubscriptionMessage
} from '@/redux/slices/subscriptionSlice';
import Image from 'next/image';
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin
  // FaYoutube,
  // FaDiscord
} from 'react-icons/fa';
import { TbBrandX } from 'react-icons/tb'; // X (formerly Twitter) icon
const Footer = () => {
  // const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  // const [hasError, setHasError] = useState(false);

  const success = useSelector(selectSubscriptionStatus);
  const error = useSelector(selectSubscriptionError);
  const message = useSelector(selectSubscriptionMessage);

  // const handleSubscribe = () => {
  //   if (!validateEmail(email)) {
  //     setErrorMessage('Please enter a valid email address.');
  //     setHasError(true);
  //     return;
  //   }

  //   setErrorMessage('');
  //   setHasError(false);

  //   // Dispatch Redux action to submit subscription
  //   dispatch(submitSubscription(email));
  // };

  // const validateEmail = (email: string) => {
  //   const re = /\S+@\S+\.\S+/;
  //   return re.test(email);
  // };

  return (
    <footer
      id='footer'
      className='bg-main-background-color4 relative mt-0 w-full mx-auto'>
      <div className='relative w-full flex flex-col items-center justify-center py-16 lg:py-20'>
        <div className='absolute inset-0 bg-cover bg-center bg-[url(/img/footer-bg.svg)] opacity-90 z-0'></div>

        <div className='px-5 sm:px-10 md:px-20 w-full relative z-10 text-start my-10'>
          <h3 className='text-main-background-color text-xl sm:text-2xl lg:text-4xl font-bold font-sora'>
            Stay informed with the latest insights and tips in payment
            processing, business growth, and merchant success
          </h3>
        </div>

        <div className='px-5 sm:px-10 md:px-20 w-full relative z-10 my-10 flex flex-col lg:flex-row justify-between items-start lg:items-center'>
          {/* Left text section */}
          <div className='w-full lg:w-[35%] self-stretch flex flex-col justify-start items-start gap-2'>
            <p className='text-main-background-color text-lg sm:text-2xl font-semibold'>
              Join our newsletter
            </p>
            <span className='text-main-background-color text-sm'>
              We’ll send you a nice letter once per week. No spam.
            </span>
          </div>

          {/* Right input and button section */}
          <div className='w-full lg:w-[55%] mt-5 lg:mt-0 h-auto lg:h-[80px] flex justify-start items-center gap-4'>
            <div className='relative w-full flex flex-col lg:flex-row items-stretch justify-between'>
              {/* Input and button container */}
              <div className='flex flex-row items-center w-full px-3 py-2 bg-main-background-color rounded-full shadow border border-[#9d9ea1]'>
                {/* Input field */}
                <input
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className='flex-grow px-4 py-2 bg-transparent text-[10px] md:text-md lg:text-lg text-second-background-color1 border-none outline-none text-main-background-color'
                />

                {/* Button beside the input */}
                <button className='bg-main-color text-main-background-color whitespace-nowrap text-sm md:text-md lg:text-lg px-6 py-3 rounded-full font-semibold flex items-center'>
                  {/* Text for small screens */}
                  <span className='block sm:hidden'>Subscribe</span>

                  {/* Text for larger screens */}
                  <span className='hidden sm:block'>Join Newsletter</span>

                  <span className='ml-1 md:ml-2'>
                    <FaArrowRight className='w-2 md:w-4 h-2 md:h-4' />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Display submission status */}
        {success && (
          <div className='z-30 mt-4 text-main-color3 text-lg font-semibold'>
            {message || 'Subscription successful!'}
          </div>
        )}
        {error && (
          <div className='z-30 mt-4 text-custom-red text-lg font-semibold'>
            {error || 'Failed to subscribe.'}
          </div>
        )}
      </div>

      {/* Main Footer Section */}
      <div className='pt-20 max-w-screen-xl mx-auto px-6 lg:px-20 py-10 lg:py-16 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-4 lg:gap-10 min-h-[300px] relative z-10 bg-gradient-to-b from-main-background-color4 via-main-background-color4 via-5% to-main-background-color4'>
        <div className='my-[10vw] col-span-2 flex flex-col items-center lg:items-start'>
          <Image
            className='mb-20'
            src='/img/logo.svg'
            alt='Logo'
            width={110}
            height={30}
          />
          <div className='flex space-x-4'>
            <a
              href='https://www.instagram.com/odinmerchanthub'
              target='_blank'
              rel='noopener noreferrer'
              className='text-contrust-color4 text-lg hover:text-main-color3 transition-colors duration-300'>
              <FaInstagram size={24} />
            </a>
            {/* <a
              href='https://www.youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-contrust-color4 text-lg hover:text-main-color3 transition-colors duration-300'>
              <FaYoutube size={24} />
            </a> */}
            <a
              href='https://www.linkedin.com/company/odin-merchant-hub/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-contrust-color4 text-lg hover:text-main-color3 transition-colors duration-300'>
              <FaLinkedin size={24} />
            </a>
            <a
              href='https://www.facebook.com/share/mSg5aBPB2cgbxd7E/?mibextid=LQQJ4d'
              target='_blank'
              rel='noopener noreferrer'
              className='text-contrust-color4 text-lg hover:text-main-color3 transition-colors duration-300'>
              <FaFacebook size={24} />
            </a>
            <a
              href='https://x.com/odinmerchanthub'
              target='_blank'
              rel='noopener noreferrer'
              className='text-contrust-color4 text-lg hover:text-main-color3 transition-colors duration-300'>
              {/* New Twitter "X" Logo */}
              <TbBrandX size={24} />
            </a>
            {/* <a
              href='https://www.discord.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-contrust-color4 text-lg hover:text-main-color3 transition-colors duration-300'>
              <FaDiscord size={24} />
            </a> */}
          </div>
        </div>

        {/* Footer Links */}
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`my-[10vw] ${
              index === 0 ? 'col-span-2' : ''
            }  flex flex-col items-start`}>
            <h3 className='whitespace-nowrap text-contrust-color4 text-lg font-medium mb-4'>
              {card.title}
            </h3>
            <ul className='space-y-3'>
              {card.content.map((item, idx) => (
                <li
                  key={idx}
                  className='whitespace-nowrap text-md text-second-background-color3'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Terms & Policy Section */}
      <div className='w-full py-8 border-t border-second-background-color2 relative z-10'>
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center'>
          <div className='px-4 flex space-x-6'>
            <a href='#' className='text-md text-contrust-color4'>
              Terms of Use
            </a>
            <a href='#' className='text-md text-contrust-color4'>
              Privacy Policy
            </a>
            <a href='#' className='text-md text-contrust-color4'>
              About Cookies
            </a>
          </div>
          <p className='px-4 text-sm text-contrust-color4 mt-4 md:mt-0'>
            Copyright © 2023 Transparent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Footer links data
const cardsData = [
  {
    title: 'Services',
    content: [
      'Payment Processing',
      'POS Systems',
      'ISV & Fintech Integration',
      'Merchant Support'
    ]
  },
  {
    title: 'About Us',
    content: ['Our team', 'Our mission']
  },
  {
    title: 'Contact Us',
    content: ['Contact Us', 'Join Us']
  },
  {
    title: 'Industry Partners',
    content: ['Trusted Partners', 'Industries we serve']
  }
];

export default Footer;
