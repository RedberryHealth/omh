'use client';
import { useEffect } from 'react';
import Layout from '../(components)/layout/Layout';
import AboutIntro from './AboutIntro';
import BookConsultation from './BookConsultation';
import BusinessStats from './BusinessStats';

const About = () => {
  useEffect(() => {
    // Auto-scroll to the "BookConsultation" component if #book is present in the URL
    if (window.location.hash === '#book') {
      const bookSection = document.getElementById('book');
      if (bookSection) {
        bookSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <Layout>
      <div className='w-full sm:w-full md:w-[90%] lg:w-[92%] flex flex-col items-center mx-auto'>
        <AboutIntro />
        <BusinessStats />
        <BookConsultation />
      </div>
    </Layout>
  );
};

export default About;
