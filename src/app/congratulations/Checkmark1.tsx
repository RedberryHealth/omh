/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from 'react';

interface Props {
  className: string;
}

export const Checkmark1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill='none'
      height='28'
      viewBox='0 0 27 28'
      width='27'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        clipRule='evenodd'
        d='M11.1474 20.6044C10.8435 20.6044 10.5529 20.4789 10.3449 20.2576L4.99161 14.5565C4.5744 14.114 4.59752 13.4172 5.04005 13.0011C5.48368 12.585 6.18049 12.607 6.5955 13.0495L11.1364 17.8832L20.392 7.7535C20.8037 7.30326 21.4994 7.27354 21.9486 7.68304C22.3966 8.09255 22.4274 8.78936 22.0179 9.23739L11.9598 20.2455C11.7539 20.4723 11.4611 20.6022 11.1551 20.6044H11.1474Z'
        fill='black'
        fillRule='evenodd'
      />
    </svg>
  );
};
