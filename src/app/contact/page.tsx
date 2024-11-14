import React from 'react';
import Layout from '../(components)/layout/Layout';
import ContactIntro from './(components)/ContactIntro';
import ContactSection from './(components)/ContactSection';

const Contact = () => {
  return (
    <Layout>
      <ContactIntro />
      <ContactSection />
      <div className='w-full sm:w-full md:w-[90%] lg:w-[88%] flex flex-col items-center mx-auto'></div>
    </Layout>
  );
};

export default Contact;
