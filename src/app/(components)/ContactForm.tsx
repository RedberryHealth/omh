'use client';
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox'; // MUI Checkbox component
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  submitRegisterForm,
  selectRegisterLoading,
  selectRegisterError
} from '@/redux/slices/registerSlice';
import { useRouter } from 'next/navigation'; // To handle redirection after submission
import { AppDispatch } from '@/redux/store';

// Define the props for showing title and description
interface ContactFormProps {
  showTitleAndDescription?: boolean;
  title?: string;
  description?: string;
}

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string().required('Message is required'),
  businessPurpose: Yup.string().required('Business purpose is required'),
  privacyPolicy: Yup.boolean().oneOf(
    [true],
    'You must agree to the privacy policy'
  )
});

const ContactForm: React.FC<ContactFormProps> = ({
  showTitleAndDescription = true,
  title = 'Get in touch',
  description = `We'd love to hear from you. Contact us for more information
            about our services, partnerships, or career opportunities.`
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector(selectRegisterLoading);
  const error = useSelector(selectRegisterError);
  const router = useRouter();

  const [inputValue, setInputValue] = useState(''); // State for tracking user input
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown open state
  const [businessOptions, setBusinessOptions] = useState([
    'E-commerce',
    'Financial Services',
    'Healthcare',
    'Retail',
    'Consulting',
    'Technology',
    'Real Estate',
    'Manufacturing'
  ]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      businessName: '',
      email: '',
      message: '',
      businessPurpose: '',
      privacyPolicy: false
    },
    validationSchema,
    onSubmit: async values => {
      const result = await dispatch(submitRegisterForm(values));
      if (result.meta.requestStatus === 'fulfilled') {
        router.push('/congratulations'); // Redirect on successful submission
      }
    }
  });

  const handleBusinessPurposeChange = (
    event: React.SyntheticEvent,
    newValue: string | null
  ) => {
    formik.setFieldValue('businessPurpose', newValue || '');
    if (newValue && !businessOptions.includes(newValue)) {
      setBusinessOptions(prevOptions => [...prevOptions, newValue]);
    }
  };

  return (
    <div className='flex flex-col items-start gap-6 px-8 py-5 w-full rounded-2xl max-w-[700px]'>
      <form onSubmit={formik.handleSubmit} className='w-full'>
        {showTitleAndDescription && (
          <div className='flex flex-col items-start gap-2.5 w-full mb-2'>
            {title && (
              <div className='text-2xl md:text-4xl font-bold font-Sora text-left text-contrust-color4'>
                {title}
              </div>
            )}
            {description && (
              <p className='text-left text-[10px] md:text-base text-contrust-color4 font-normal font-Roboto tracking-tight'>
                {description}
              </p>
            )}
          </div>
        )}

        <div className='flex flex-wrap justify-between gap-4 w-full mb-2'>
          <div className='w-full md:w-[48%] flex flex-col justify-start'>
            <div className='text-contrust-color4 text-[15px] md:text-base font-bold font-sora leading-tight tracking-tight'>
              First name
            </div>
            <FormInput
              placeholder='First name'
              id='firstName'
              type='text'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && formik.errors.firstName}
            />
          </div>
          <div className='w-full md:w-[48%] flex flex-col justify-start'>
            <div className='text-contrust-color4 text-[15px] md:text-base font-bold font-sora leading-tight tracking-tight'>
              Last name
            </div>
            <FormInput
              placeholder='Last name'
              id='lastName'
              type='text'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && formik.errors.lastName}
            />
          </div>
        </div>

        <div className='flex flex-col justify-start'>
          <div className='text-contrust-color4 text-[15px] md:text-base font-bold font-sora leading-tight tracking-tight'>
            Email
          </div>
          <div className='mb-2'>
            <FormInput
              placeholder='Email'
              id='email'
              type='email'
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />
          </div>
        </div>

        <div className='flex flex-col justify-start w-full'>
          <div className='text-contrust-color4 text-[15px] md:text-base font-bold font-sora leading-tight tracking-tight'>
            Industry
          </div>
          <Autocomplete
            freeSolo
            options={businessOptions}
            value={formik.values.businessPurpose}
            onChange={handleBusinessPurposeChange}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              formik.setFieldValue('businessPurpose', newInputValue);
            }}
            open={isDropdownOpen}
            onOpen={() => setIsDropdownOpen(true)}
            onClose={() => setIsDropdownOpen(false)}
            renderInput={params => (
              <TextField
                {...params}
                variant='outlined'
                placeholder='Type or select an industry'
                error={!!formik.errors.businessPurpose}
                helperText={formik.errors.businessPurpose}
                className='w-full bg-main-background-color text-contrust-color4'
                InputProps={{
                  ...params.InputProps,
                  style: {
                    padding: '10px 12px', // Adjust padding to match email field height
                    height: '50px', // Set height to match email field
                    borderRadius: '15px', // Rounded corners
                    borderColor: '#000' // Black border color
                  },
                  endAdornment: (
                    <>
                      {isDropdownOpen ? (
                        <FaChevronUp className='text-contrust-color4 cursor-pointer' />
                      ) : (
                        <FaChevronDown className='text-contrust-color4 cursor-pointer' />
                      )}
                    </>
                  )
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#000', // Black border color
                      borderRadius: '15px' // 15px rounded corners
                    },
                    '&:hover fieldset': {
                      borderColor: '#000' // Keep black on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#000' // Keep black when focused
                    }
                  }
                }}
              />
            )}
          />
        </div>

        <div className='flex flex-col w-full mb-2'>
          <div className='text-contrust-color4 text-[15px] md:text-base font-bold font-sora leading-tight tracking-tight'>
            Message
          </div>
          <textarea
            id='message'
            className={`w-full h-[154px] bg-main-background-color rounded-md md:rounded-xl border-[1.5px] border-solid border-second-background-color1 p-4 text-contrust-color4 ${
              formik.touched.message && formik.errors.message
                ? 'border-custom-red'
                : ''
            }`}
            placeholder='Type your message here'
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && (
            <div className='text-custom-red mt-1'>{formik.errors.message}</div>
          )}
        </div>

        {/* Privacy Policy */}
        <div className='flex items-center gap-3 w-full mb-2'>
          <Checkbox
            checked={formik.values.privacyPolicy}
            onChange={formik.handleChange}
            name='privacyPolicy'
            onBlur={formik.handleBlur}
            size='medium'
            icon={
              <span className='w-6 h-6 border border-solid border-second-background-color bg-main-background-color' />
            }
            checkedIcon={
              <span className='w-6 h-6 flex items-center justify-center bg-main-color3 rounded text-contrust-color4'>
                ✔
              </span>
            }
          />
          <p className='text-sm text-secondary'>
            <span className='text-second-background-color'>
              You agree to our friendly{' '}
            </span>
            <span className='underline text-second-background-color'>
              privacy policy
            </span>
            .
          </p>
        </div>
        {formik.touched.privacyPolicy && formik.errors.privacyPolicy && (
          <div className='text-custom-red mb-2'>
            {formik.errors.privacyPolicy}
          </div>
        )}

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full h-[57px] flex items-center justify-center rounded-lg bg-gradient-to-b from-main-color3 to-purple-med text-contrust-color4'
          disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {error && <div className='text-custom-red mt-2'>{error}</div>}
      </form>
    </div>
  );
};

// Correctly typed FormInput component
const FormInput: React.FC<{
  id: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  error?: string | false;
  fullWidth?: boolean;
}> = ({
  id,
  placeholder,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  fullWidth = false
}) => (
  <div className={`flex-1 ${fullWidth ? 'w-full' : ''}`}>
    <input
      id={id}
      className={`w-full px-4 py-3 bg-main-background-color rounded-[15px] border-black border-[1.5px] text-contrust-color4 ${
        error ? 'border-custom-red' : ''
      }`}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <div className='text-custom-red mt-1'>{error}</div>}
  </div>
);

export default ContactForm;
