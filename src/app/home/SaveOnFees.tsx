import React from 'react';

import MainUploadFiles from '../(components)/upload-components/MainUploadFiles';

export const SaveOnFees = (): JSX.Element => {
  return (
    <div className='w-full mx-w-[1440px] h-auto md:h-[684px] bg-main-background-color bg-gradient-radial-light'>
      <div
        className='w-[85%] mx-w-w-[1153px] 
      items-center gap-[42px] top-[89px] 
      flex flex-col relative mx-auto  '>
        <div className='items-center gap-6 self-stretch w-full flex-[0_0_auto] flex flex-col relative'>
          <div
            className='relative self-stretch mt-[-1.00px] font-sora
           font-bold 
           text-contrust-color4
           text-[34px] md:text-[40px] text-center '>
            Save on Fees
          </div>

          <p
            className='relative self-stretch 
          font-roboto font-regular 
         text-second-background-color3 text-sm md:text-xl text-center'>
            Upload your current payment processing statement, and we’ll show you
            how much you can save by switching to our solutions. Our competitive
            rates ensure that your business maximizes revenue while keeping
            costs low.
          </p>
        </div>

        <MainUploadFiles />
      </div>
    </div>
  );
};
