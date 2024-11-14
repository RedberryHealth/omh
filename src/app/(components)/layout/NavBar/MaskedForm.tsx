// components/MaskedForm.tsx
'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import Image from 'next/image'; // Import Next.js Image component
import { MdClose } from 'react-icons/md'; // Import the close icon from react-icons

interface MaskedFormProps {
  onClose: () => void; // Function to handle close action
}

const MaskedForm: React.FC<MaskedFormProps> = ({ onClose }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  ); // State to track form submission status

  const formik = useFormik({
    initialValues: {
      username: '',
      email: ''
    },
    validate: values => {
      const errors: { username?: string; email?: string } = {};

      // Validate username
      if (!values.username) {
        errors.username = 'Username is required';
      } else if (values.username.length < 2) {
        errors.username = 'Username must be at least 2 characters';
      }

      // Validate email
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      return errors; // Return errors object
    },
    onSubmit: async values => {
      // Handle form submission
      console.log('Form values submitted:', values); // Log the submitted values

      // Here, replace the following with actual API call to your backend
      try {
        const response = await fetch('/api/submit', {
          // Update the endpoint as necessary
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });

        const data = await response.json(); // Ensure data is read to avoid ESLint warning
        console.log(data);
        if (response.ok) {
          setFormStatus('success'); // Set status to success if API call was successful
        } else {
          setFormStatus('error'); // Set status to error if API call failed
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
        setFormStatus('error'); // Set status to error if an exception occurs
      }
    }
  });

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50'>
      {' '}
      {/* Ensure it covers the whole screen */}
      <div className='relative flex flex-col items-center justify-center h-auto min-h-[40%] w-[80%] md:w-[55%] lg:w-[35%] p-5 bg-[#fff] rounded-[25px] z-60'>
        {' '}
        {/* Adjust z-index */}
        {/* Close Button */}
        <button
          onClick={onClose} // Call onClose function when clicked
          className='absolute top-6 right-8 text-[#000] flex items-center justify-center'
          aria-label='Close'>
          <MdClose size={22} /> {/* Professional close icon from react-icons */}
        </button>
        {/* Logo Row */}
        <div className='mb-4'>
          {/* Use Next.js Image component */}
          <Image
            src='/img/white-mint-1.svg' // Replace with your logo path
            alt='Logo'
            width={128} // Adjust width as necessary
            height={32} // Adjust height as necessary
            className='h-auto w-32' // Optional: adjust for responsive sizing
          />
        </div>
        {formStatus === 'idle' && (
          <form className='w-full' onSubmit={formik.handleSubmit}>
            {/* Username Field */}
            <div className='flex flex-col items-start w-full mb-4'>
              <label htmlFor='username' className='text-[#000] mb-1'>
                Username
              </label>
              <input
                id='username'
                type='text'
                className='w-full p-2 border border-gray-700 bg-[#fff] rounded-[10px] text-[#000]'
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // Handle blur for validation
              />
              {formik.touched.username && formik.errors.username ? (
                <div className='text-red-500 text-sm'>
                  {formik.errors.username}
                </div>
              ) : null}
            </div>

            {/* Email Field */}
            <div className='flex flex-col items-start w-full mb-4'>
              <label htmlFor='email' className='text-[#000] mb-1'>
                Email
              </label>
              <input
                id='email'
                type='email'
                className='w-full p-2 border border-gray-700 bg-[#fff] text-[#000] rounded-[10px]'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // Handle blur for validation
              />
              {formik.touched.email && formik.errors.email ? (
                <div className='text-red-500 text-sm'>
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            {/* Join Button */}
            <button
              type='submit'
              className="text-lg w-full p-2 bg-main-color text-[#fff] [font-family:'Roboto',Helvetica] font-semibold rounded hover:bg-[#645390]">
              Join
            </button>
          </form>
        )}
        {formStatus === 'success' && (
          <div className='text-[#000] text-center'>
            <p className='mb-4'>Thanks for joining us!</p>
            <button
              onClick={onClose} // Button to go back or close the form
              className='text-lg w-full p-2 bg-main-color text-[#fff] [font-family:"Roboto",Helvetica] font-semibold rounded hover:bg-[#645390]'>
              Back to Proceed
            </button>
          </div>
        )}
        {formStatus === 'error' && (
          <div className='text-[#000] text-center'>
            <p className='mb-4'>Sorry, please try again.</p>
            <button
              onClick={() => setFormStatus('idle')} // Button to try again
              className='text-lg w-full p-2 bg-main-color text-[#fff] [font-family:"Roboto",Helvetica] font-semibold rounded hover:bg-[#645390]'>
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MaskedForm;
