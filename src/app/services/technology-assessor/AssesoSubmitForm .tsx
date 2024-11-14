import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaArrowRight } from 'react-icons/fa';
import { CustomModal } from './CustomModal/CustomModal';

const AssesoSubmitForm = (): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Valid email is required'),
      phone: Yup.string().required('Phone number is required')
    }),
    onSubmit: values => {
      console.log('Form values:', values);
      setIsSubmitted(true); // Show the modal on successful form submission
    }
  });

  // Function to close the modal
  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Show Modal when form is successfully submitted */}
      {isSubmitted && (
        <CustomModal
          closeModal={closeModal}
          buttonText='Done' // Pass custom button text
          title='Thank you!' // Pass custom title
          paragraph='Our team will reach out to you shortly to schedule your personalized consultation.' // Pass custom paragraph
        />
      )}

      {/* Form */}
      <form
        onSubmit={formik.handleSubmit}
        className='flex flex-col items-center gap-8 p-6 md:p-8 bg-white rounded-lg overflow-hidden w-full max-w-full mx-auto'>
        <div className='w-full'>
          <p className='font-semibold text-black text-lg md:text-xl'>
            Please fill the form field (Required)
          </p>
        </div>

        <div className='w-full space-y-4'>
          {/* Name Input */}
          <div className='w-full'>
            <label className='text-sm font-medium text-gray-700'>Name</label>
            <input
              className={`w-full border ${
                formik.errors.name ? 'border-red-500' : 'border-gray-300'
              } py-3 px-4 rounded-xl text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500`}
              placeholder='Enter your name'
              type='text'
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className='text-red-500 text-sm'>{formik.errors.name}</p>
            ) : null}
          </div>

          {/* Email Input */}
          <div className='w-full'>
            <label className='text-sm font-medium text-gray-700'>Email</label>
            <input
              className={`w-full border ${
                formik.errors.email ? 'border-red-500' : 'border-gray-300'
              } py-3 px-4 rounded-xl text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500`}
              placeholder='you@company.com'
              type='email'
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className='text-red-500 text-sm'>{formik.errors.email}</p>
            ) : null}
          </div>

          {/* Phone Input */}
          <div className='w-full'>
            <label className='text-sm font-medium text-gray-700'>
              Phone Number
            </label>
            <input
              className={`w-full border ${
                formik.errors.phone ? 'border-red-500' : 'border-gray-300'
              } py-3 px-4 rounded-xl text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500`}
              placeholder='Enter your phone number'
              type='tel'
              {...formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p className='text-red-500 text-sm'>{formik.errors.phone}</p>
            ) : null}
          </div>
        </div>

        {/* Submit Button */}
        <div className='w-full flex justify-center'>
          <button
            type='submit'
            className='flex items-center gap-2 px-8 py-3 bg-main-color text-white rounded-full focus:outline-none shadow-md hover:bg-main-color-dark transition'>
            <p className='text-base font-normal'>
              Submit &amp; Get Expert Recommendations
            </p>
            <FaArrowRight className='w-6 h-6' />
          </button>
        </div>
      </form>
    </>
  );
};

export default AssesoSubmitForm;
