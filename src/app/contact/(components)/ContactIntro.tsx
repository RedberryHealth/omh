'use client';
import IntroCard from '@/app/(components)/IntroCard/IntroCard';

export default function ContactIntro() {
  return (
    <IntroCard
      paragraph='Let’s Get Started'
      subParagraph='We’re here to support your business with tailored payment solutions. Let’s talk about your needs.'
      backgroundImagePath='/img/footer-bg.svg'
      TitleWidthPercentage='90%'
      SpanWidthPercentage='100%'
      CardHeight='350px'
      RemoveMask={true}
      IsNotRounded={true}
      MarginTop='mt-2 md:mt-20'
    />
  );
}
