'use client';

import React, { useEffect } from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from '../../(components)/ContactForm';
import { FiMail, FiMessageCircle, FiMapPin, FiPhone } from 'react-icons/fi'; // Feather icons
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social Media icons
import { TbBrandX } from 'react-icons/tb'; // X (formerly Twitter) icon
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContactSectionData,
  selectContactMethods,
  selectSocialLinks,
  selectContactSectionLoading,
  selectContactSectionError
} from '@/redux/slices/contactSectionSlice';
import { AppDispatch } from '@/redux/store';

const ContactSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contactMethods = useSelector(selectContactMethods); // Get contact methods from Redux store
  const socialLinks = useSelector(selectSocialLinks); // Get social links from Redux store
  const loading = useSelector(selectContactSectionLoading); // Get loading state
  const error = useSelector(selectContactSectionError); // Get error state

  // Fetch contact section data from API on component mount
  useEffect(() => {
    dispatch(fetchContactSectionData());
  }, [dispatch]);

  // Map icons from strings to React components
  const iconMap: { [key: string]: JSX.Element } = {
    FiMail: <FiMail className='!relative !w-6 !h-6 text-main-color' />,
    FiMessageCircle: (
      <FiMessageCircle className='!relative !w-6 !h-6 text-main-color' />
    ),
    FiMapPin: <FiMapPin className='!relative !w-6 !h-6 text-main-color' />,
    FiPhone: <FiPhone className='!relative !w-6 !h-6 text-main-color' />,
    FaFacebook: (
      <FaFacebook className='!relative !w-[30px] !h-[30px] text-contrust-color4' />
    ),
    TbBrandX: (
      <TbBrandX className='!relative !w-[30px] !h-[30px] text-contrust-color4' />
    ),
    FaInstagram: (
      <FaInstagram className='!relative !w-[30px] !h-[30px] text-contrust-color4' />
    ),
    FaLinkedin: (
      <FaLinkedin className='!relative !w-[30px] !h-[30px] text-contrust-color4' />
    )
    // FaYoutube: (
    //   <FaYoutube className='!relative !w-[30px] !h-[30px] text-custom-red' />
    // )
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error state
  }

  return (
    <div className='flex flex-col md:flex-row justify-between items-center mx-auto bg-main-background-color py-10 bg-gradient-radial-light'>
      {/* Contact Details Section */}
      <div className='w-full md:w-[30%] mb-10 md:mb-0'>
        <div className='flex flex-col items-start w-full gap-16 px-0 py-10'>
          <ContactDetails
            contactMethods={contactMethods.map(method => ({
              ...method,
              icon: iconMap[method.icon]
            }))}
            socialLinks={socialLinks.map(link => ({
              ...link,
              icon: iconMap[link.icon]
            }))}
          />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className='w-full md:w-[60%] flex justify-center'>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
