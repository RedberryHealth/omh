'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx'; // For conditional class concatenation

interface IntroComponentProps {
  onIntroComplete: () => void; // Callback to notify the parent component
}

const IntroComponent: React.FC<IntroComponentProps> = ({ onIntroComplete }) => {
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Phase sequence to control the entrance of each word
    const phaseSequence = [
      { delay: 1000, phase: 1 }, // First word appears after 1 second
      { delay: 2000, phase: 2 }, // Second word after another 1 second
      { delay: 3000, phase: 3 }, // Third word after another 1 second
      { delay: 5000, phase: 4 } // Pause for 2 seconds after all words appear
    ];

    // Set timeout to trigger each phase
    phaseSequence.forEach(({ delay, phase }) => {
      setTimeout(() => {
        setPhase(phase);
      }, delay);
    });

    // After the pause phase, trigger the exit animation
    setTimeout(() => {
      setIsExiting(true);
    }, 5000); // 3 seconds for all words + 2 seconds wait

    // Call onIntroComplete after 1 second delay following the exit animation
    setTimeout(() => {
      onIntroComplete();
    }, 7000); // 5 seconds total + 1 second for fade-out
  }, [onIntroComplete]);

  return (
    <div className='absolute inset-0 w-full h-full bg-main-background-color z-[200] overflow-hidden'>
      {/* Content inside */}
      <div className='relative flex items-center justify-center h-screen w-screen bg-main-background-color overflow-hidden'>
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-[url('/img/intro-bg.svg')] bg-center flex items-center justify-center">
          {/* Words Wrapper */}
          <div className='h-[300px] sm:h-[300px] md:h-[120px] lg:h-[120px] overflow-hidden'>
            <div
              className={clsx(
                'flex flex-col lg:flex-row items-center justify-center lg:space-x-8 space-y-6 lg:space-y-0 transition-transform duration-1000',
                {
                  'translate-y-0': !isExiting,
                  '-translate-y-full': isExiting // Slide up on exit
                }
              )}>
              {/* Child Components */}
              <div
                className={clsx(
                  'font-sora font-bold text-contrust-color4 text-6xl transition-transform duration-700',
                  {
                    'translate-y-0 opacity-100': phase >= 1 && !isExiting,
                    'translate-y-[100%] opacity-0': phase < 1
                  }
                )}>
                ODIN
              </div>

              <div
                className={clsx(
                  'font-sora font-bold text-contrust-color4 text-6xl transition-transform duration-700 delay-100',
                  {
                    'translate-y-0 opacity-100': phase >= 2 && !isExiting,
                    'translate-y-[100%] opacity-0': phase < 2
                  }
                )}>
                MERCHANT
              </div>

              <div
                className={clsx(
                  'font-sora font-bold text-contrust-color4 text-6xl transition-transform duration-700 delay-200',
                  {
                    'translate-y-0 opacity-100': phase >= 3 && !isExiting,
                    'translate-y-[100%] opacity-0': phase < 3
                  }
                )}>
                HUB
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroComponent;
