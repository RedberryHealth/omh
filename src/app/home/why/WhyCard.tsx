import React from 'react';
import Image, { StaticImageData } from 'next/image'; // Import StaticImageData type

interface CardProps {
  mainImage: string | StaticImageData; // Allow both string and StaticImageData
  iconImage: string | StaticImageData; // Same for icon image
  title: string;
  cardWidth?: string; // Optionally customize width
  cardHeight?: string; // Optionally customize height
}

const WhyCard: React.FC<CardProps> = ({
  mainImage,
  iconImage,
  title,
  cardWidth = '360px',
  cardHeight = '318px'
}) => {
  return (
    <div
      className={`relative`}
      style={{
        width: cardWidth,
        height: cardHeight,
        borderRadius: '10.24px',
        border: 'none'
      }}>
      <div
        className='relative bg-white overflow-hidden'
        style={{
          width: `calc(${cardWidth} - 2px)`,
          height: `calc(${cardHeight} - 1px)`,
          borderRadius: '10.24px'
        }}>
        <Image
          className='absolute object-cover'
          alt={title}
          src={mainImage} // Use src={mainImage} to support both string and StaticImageData
          layout='fill' // Ensures the image covers the entire area
          objectFit='cover' // To cover the image area properly
        />

        <div
          className='absolute bg-[#f7f7f7]'
          style={{
            width: `calc(${cardWidth} - 2px)`,
            height: '67px',
            top: '250px'
          }}>
          <div className='inline-flex items-center gap-[10.24px] relative top-5 left-6'>
            <Image
              className='relative object-cover'
              alt='Icon'
              src={iconImage} // Use src={iconImage} to support both string and StaticImageData
              width={25.6}
              height={25.6}
            />
            <div
              className='relative w-fit font-semibold text-black text-[17.1px] leading-[23.9px] whitespace-nowrap'
              style={{ fontFamily: `'Sora-SemiBold', Helvetica` }}>
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
