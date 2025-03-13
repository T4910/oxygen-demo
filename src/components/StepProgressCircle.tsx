import React from 'react';

type StepProgressCircleProps = {
  currentStep: number;
  totalSteps: number;
};

const StepProgressCircle: React.FC<StepProgressCircleProps> = ({ currentStep, totalSteps }) => {
  // Calculate the progress percentage
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="relative size-4 inline-block">
      {/* Background circle (gray) */}
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <circle 
          cx="18" 
          cy="18" 
          r="16" 
          fill="none" 
          stroke="#e6e6e6" 
          strokeWidth="4"
        />
      </svg>
      
      {/* Progress circle (blue) - uses stroke-dasharray and stroke-dashoffset to create the progress effect */}
      <svg className="absolute top-0 left-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
        <circle 
          cx="18" 
          cy="18" 
          r="16" 
          fill="none" 
          stroke="#304399" 
          strokeWidth="4"
          strokeDasharray="100.53"  // Circumference of the circle (2 * π * r)
          strokeDashoffset={100.53 + ((100.53 * progress) / 100)} // Calculate the dash offset based on progress
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default StepProgressCircle; 