import React from 'react';
import Image from 'next/image';

export const UploadMerchantStatement = (): JSX.Element => {
  return (
    <div className='mt-32 w-full max-w-[1440px] h-auto bg-white mx-auto p-5'>
      <div className='flex flex-col w-full max-w-[1282px] gap-10 mx-auto items-center relative'>
        <div className='flex flex-col w-full max-w-[1018px] gap-5 items-center text-center'>
          {/* Title */}
          <p className='font-bold text-contrust-color4 text-[30px] md:text-[40px] lg:text-[50px] leading-normal tracking-0'>
            Save on Payment Processing Fees – Get Your Free Savings Estimate
          </p>

          {/* Description */}
          <p className='text-second-background-color3 text-[16px] md:text-[20px] lg:text-[22px] leading-[26.4px] tracking-[0.22px]'>
            Want to know how much you could save? Upload your merchant statement
            and let us show you!
          </p>

          {/* Upload Button with Icon */}
          <div className='inline-flex h-[61px] items-center'>
            <div className='flex items-center justify-center px-8 py-2.5 bg-main-color rounded-[50px] shadow-[0px_4px_4px_#ecddff]'>
              <Image
                src={'/img/upload-doc.svg'}
                alt='Upload Icon'
                width={24}
                height={24}
                className='w-6 h-6'
              />
              <div className='ml-2 font-normal text-white text-base'>
                Upload Your Merchant Statement
              </div>
            </div>
          </div>

          {/* Additional Description */}
          <p className='text-second-background-color3 text-[16px] md:text-[20px] lg:text-[22px] leading-[26.4px] tracking-[0.22px]'>
            Get a tailored analysis and see how much you can save today.
          </p>

          {/* Secure File Upload Section */}
          <div className='inline-flex items-center gap-2.5'>
            <Image
              src={'/img/shieldSecurity.svg'}
              alt='Shield security'
              width={24}
              height={24}
              className='w-6 h-6'
            />
            <p className='text-second-background-color3 text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[26.4px] whitespace-nowrap'>
              Secure file upload – Your information is safe with us
            </p>
          </div>
        </div>

        {/* Background Image */}
        <div className='relative w-full h-[300px] md:h-[400px] lg:h-[562px] bg-[#ffffff] rounded-[30px] overflow-hidden'>
          <Image
            src={'/img/upload-statment-bg.png'}
            alt='Image'
            layout='fill'
            objectFit='cover'
            className='absolute top-0 left-0'
          />
        </div>
      </div>
    </div>
  );
};

export default UploadMerchantStatement;
