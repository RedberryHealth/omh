import React from 'react';

interface CircleProgressProps {
  step: number;
  totalSteps: number;
}

const CircleProgress: React.FC<CircleProgressProps> = ({
  step,
  totalSteps
}) => {
  const radius = 18;
  const strokeWidth = 7;
  const circumference = 2 * Math.PI * radius;

  // Ensure progress does not exceed totalSteps
  const progressStep = Math.min(step, totalSteps);
  const progress = (progressStep / totalSteps) * circumference;

  const adjustedRadius = radius + strokeWidth / 2; // Adjust radius to account for stroke width

  return (
    <div className='relative w-10 h-10'>
      <svg
        width={adjustedRadius * 2}
        height={adjustedRadius * 2}
        className='absolute'
        viewBox={`0 0 ${adjustedRadius * 2} ${adjustedRadius * 2}`}>
        <circle
          cx={adjustedRadius}
          cy={adjustedRadius}
          r={radius}
          stroke='#B1ADD4'
          strokeWidth={strokeWidth}
          fill='none'
        />
        <circle
          cx={adjustedRadius}
          cy={adjustedRadius}
          r={radius}
          stroke='#6453ee'
          strokeWidth={strokeWidth}
          fill='none'
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap='round'
          transform={`rotate(-90 ${adjustedRadius} ${adjustedRadius})`}
        />
      </svg>
    </div>
  );
};

export default CircleProgress;
