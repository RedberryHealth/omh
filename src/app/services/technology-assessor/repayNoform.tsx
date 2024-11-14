import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaArrowRight } from 'react-icons/fa';
import { CustomModal } from './CustomModal/CustomModal'; // Import the CustomModal

const RepayNoForm = (): JSX.Element => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Yes'); // Store selected option
  const [email, setEmail] = useState(''); // Store email input
  const [errors, setErrors] = useState<{ email?: string }>({}); // Store validation errors
  const [isSubmitted, setIsSubmitted] = useState(false); // State to control the modal visibility

  // Custom validation logic
  const validateForm = () => {
    const newErrors: { email?: string } = {};

    if (selectedOption === 'Yes' && !email) {
      newErrors.email = 'Valid email is required';
    } else if (
      email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form values:', { email, selectedOption });
      setIsSubmitted(true); // Show modal on successful form submission
    } else {
      console.log('Form validation failed');
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // This ensures dropdown can be toggled
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false); // Close dropdown after selecting
  };

  const closeModal = () => {
    setIsSubmitted(false); // Close the modal
  };

  return (
    <>
      {/* Show Modal when form is successfully submitted */}
      {isSubmitted && (
        <CustomModal
          closeModal={closeModal}
          buttonText='Done' // Custom button text
          title='Thank you for completing the assessment!' // Custom modal title
          paragraph='We’ll keep you updated with helpful insights' // Custom paragraph
        />
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center gap-8 p-6 md:p-8 bg-white rounded-lg overflow-hidden w-full max-w-full mx-auto'>
        <div className='w-full'>
          <p className='font-semibold text-black text-lg md:text-xl'>
            Please fill the form field (Optional)
          </p>
        </div>

        <div className='w-full space-y-4'>
          {/* Select Box for Yes/No with Label */}
          <div className='w-full'>
            <label className='text-sm font-medium text-gray-700'>
              Would you like to receive future insights, offers, or payment
              solution updates?
            </label>
            <div className='relative'>
              <div
                onClick={toggleDropdown}
                className='flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-gray-300 shadow-sm w-full cursor-pointer'>
                <div className='flex-1 text-sm text-gray-700'>
                  {selectedOption}
                </div>
                <div>
                  {isDropdownOpen ? (
                    <FaChevronUp className='w-5 h-5' />
                  ) : (
                    <FaChevronDown className='w-5 h-5' />
                  )}
                </div>
              </div>

              {/* Dropdown Options */}
              {isDropdownOpen && (
                <div className='absolute mt-1 w-full bg-[#ffffff] rounded-xl shadow-lg border border-gray-300'>
                  <div
                    onClick={() => handleOptionSelect('Yes')}
                    className='px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm text-gray-700'>
                    Yes
                  </div>
                  <div
                    onClick={() => handleOptionSelect('No')}
                    className='px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm text-gray-700'>
                    No
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Email Input with Label */}
          <div className='w-full'>
            <label className='text-sm font-medium text-gray-700'>
              Email Address
            </label>
            <input
              className={`w-full border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } py-3 px-4 rounded-xl text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500`}
              placeholder='Enter your email address'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email}</p>
            )}
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

export default RepayNoForm;
