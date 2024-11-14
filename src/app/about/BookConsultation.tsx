import React from 'react';

export default function BookConsultation() {
  return (
    <div
      id='book'
      className='relative w-full max-w-[1276px] h-auto m-10 mx-auto border-[0.8px] border-solid border-[#6453ee33] p-5'>
      {/* Background Image */}
      <div
        className='absolute w-[1312px] h-[332px] top-[20%] left-[-20px] bg-cover bg-center'
        style={{ backgroundImage: "url('/img/book-bg.svg')" }}
      />

      {/* Form Content */}
      <div className='relative p-10 bg-main-background-color bg-opacity-20 backdrop-blur-lg rounded-lg z-10'>
        <div className='flex flex-col items-start gap-8'>
          <div className='text-lg font-medium text-black tracking-[3.60px] leading-normal'>
            CONTACT US
          </div>
          <div
            className='text-[#6453ee] text-xl md:text-3xl font-semibold 
          tracking-[6.00px] leading-normal'>
            BOOK FREE CONSULTATION
          </div>
        </div>

        <div className='flex flex-wrap gap-6 mt-10'>
          {/* Full Name and Email */}
          <div className='w-full md:w-[48%]'>
            <div className='flex flex-col gap-4'>
              <label className='text-lg font-normal text-black'>
                Full Name
              </label>
              <input
                type='text'
                placeholder='Enter full name'
                className='w-full border-b border-gray-900 focus:outline-none placeholder-gray-600'
                style={{ opacity: 0.1 }} // Maintaining original opacity
              />
            </div>
          </div>

          <div className='w-full md:w-[48%]'>
            <div className='flex flex-col gap-4'>
              <label className='text-lg font-normal text-black'>
                Email Address
              </label>
              <input
                type='email'
                placeholder='Enter email address'
                className='w-full border-b border-gray-900 focus:outline-none placeholder-gray-600'
                style={{ opacity: 0.1 }} // Maintaining original opacity
              />
            </div>
          </div>

          {/* Business Name and Industry */}
          <div className='w-full md:w-[48%]'>
            <div className='flex flex-col gap-4'>
              <label className='text-lg font-normal text-black'>
                Business Name
              </label>
              <input
                type='text'
                placeholder='Enter business name'
                className='w-full border-b border-gray-900 focus:outline-none placeholder-gray-600'
                style={{ opacity: 0.1 }} // Maintaining original opacity
              />
            </div>
          </div>

          <div className='w-full md:w-[48%]'>
            <div className='flex flex-col gap-4'>
              <label className='text-lg font-normal text-black'>Industry</label>
              <input
                type='text'
                placeholder='Enter industry'
                className='w-full border-b border-gray-900 focus:outline-none placeholder-gray-600'
                style={{ opacity: 0.1 }} // Maintaining original opacity
              />
            </div>
          </div>

          {/* Message */}
          <div className='w-full'>
            <div className='flex flex-col gap-4'>
              <label className='text-lg font-normal text-black'>Message</label>
              <textarea
                placeholder='Enter your message'
                className='w-full border-b border-gray-900 focus:outline-none placeholder-gray-600'
                rows={4}
                style={{ opacity: 0.1 }} // Maintaining original opacity
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className='w-full mt-8'>
          <button className='w-full h-[57px] flex items-center justify-center bg-[#6453ee] text-white font-semibold text-base rounded-lg'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
