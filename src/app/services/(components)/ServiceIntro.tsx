'use client';
import { useRouter } from 'next/navigation';
import IntroCard from '@/app/(components)/IntroCard/IntroCard';

export default function ServiceIntro() {
  const router = useRouter();

  // Handle the button click and navigate to /home/upload
  const handleButtonClick = () => {
    router.push('/home/upload');
  };

  return (
    <IntroCard
      paragraph='Comprehensive Payment Solutions for Every Business'
      subParagraph='From payment processing to POS systems, we offer solutions that help your business grow while reducing costs.'
      buttonText='Find the Right Payment Solution'
      backgroundImagePath='/img/close-up-woman-buying-product 1.png'
      TitleWidthPercentage='60%'
      SpanWidthPercentage='100%'
      onClick={handleButtonClick} // Pass the click handler as an optional prop
    />
  );
}
