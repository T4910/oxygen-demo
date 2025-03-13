'use client';

import CustomerInfoForm from '@/components/CustomerInfoForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useLoanStore } from '@/store/loanStore';
import { useEffect } from 'react';

const CustomerInfoPage = () => {
  const { setCurrentStep } = useLoanStore();
  
  // Reset to step 1 when page loads
  useEffect(() => {
    setCurrentStep(1);
  }, [setCurrentStep]);

  return (
    <CustomerInfoForm />
      
  );
}

export default CustomerInfoPage;