'use client';

import { RefObject, createRef, useEffect, useRef, useState } from 'react';
import SuccessComponent from './SuccessComponent';

interface OtpVerificationProps {
  email: string;
  onVerify: (otp: string) => void;
  onResendCode: () => void;
}

export default function OtpVerification({ 
  email, 
  onVerify, 
  onResendCode 
}: OtpVerificationProps) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const inputRefs = useRef<Array<RefObject<HTMLInputElement | null>>>([]);
  
  // Initialize refs when component mounts
  useEffect(() => {
    inputRefs.current = Array(6).fill(0).map(() => createRef<HTMLInputElement>());
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d*$/.test(value)) return;

    // Update OTP state
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Take only the last character if multiple are pasted
    setOtp(newOtp);

    // If a digit was entered and we're not at the last box, move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace - move to previous input if current is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    
    // Only process if it looks like an OTP (digits only)
    if (!/^\d+$/.test(pastedData)) return;

    // Fill the OTP fields with pasted characters
    const newOtp = [...otp];
    for (let i = 0; i < Math.min(pastedData.length, 6); i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    // Focus the appropriate field
    const focusIndex = Math.min(pastedData.length, 5);
    inputRefs.current[focusIndex]?.current?.focus();
  };

  const handleSubmit = () => {
    const otpString = otp.join('');
    if (otpString.length === 6) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setVerified(true);
      }, 2000);
    }
  };

  if (verified) {
    return <SuccessComponent />;
  }

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <div className="mb-6">
        <p className="text-gray-700 mb-1">We've sent a 6-digit code to</p>
        <p className="text-primary font-medium mb-1">{email}</p>
        <p className="text-gray-700">Please enter it below.</p>
      </div>

      <div className="flex justify-center space-x-2 mb-2">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            ref={inputRefs.current[index]}
            type="text"
            value={otp[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={index === 0 ? handlePaste : undefined}
            className="w-12 h-12 border-2 border-gray-300 rounded text-center text-xl font-semibold"
            maxLength={1}
            autoFocus={index === 0}
          />
        ))}
      </div>

      <button 
        className="text-primary text-sm mb-6 hover:underline text-blue-800"
        onClick={onResendCode}
      >
        Click to send new code.
      </button>

      <button
        onClick={handleSubmit}
        className={`w-full text-white py-3 rounded font-medium ${loading ? 'bg-gray-400' : 'bg-blue-800'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        disabled={loading}
      >
        {loading ? (
          <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
        ) : (
          'Verify'
        )}
      </button>
    </div>
  );
} 