'use client';

import OtpVerification from '@/components/OtpVerification';
import { useLoanStore } from '@/store/loanStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const page = () => {
    const router = useRouter();
    const { customerInfo: { email } } = useLoanStore();
    // const [email] = useState('michael.ashefor@gmail.com'); // This would typically come from a previous step or context
    
    const handleVerify = (otp: string) => {
      console.log('Verifying OTP:', otp);
      // Here you would verify the OTP with your backend
      // If successful, redirect to the next page
      // router.push('/next-page');
    };
    
    const handleResendCode = () => {
      console.log('Resending code to:', email);
      // Here you would call your API to resend the code
    };

    return (          
        <OtpVerification 
            email={email || 'michael.ashfor@gmail.com'}
            onVerify={handleVerify}
            onResendCode={handleResendCode}
        />
    )
}

export default page