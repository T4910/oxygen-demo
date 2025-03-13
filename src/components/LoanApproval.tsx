'use client';

import { useLoanStore } from '@/store/loanStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoanApproval() {
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();
  const { customerInfo: { firstName, lastName }, paymentPlanData: { loanAmount, monthlyPayment, duration, repaymentDate } } = useLoanStore();

  const handleCheckboxChange = () => {
    setAccepted(!accepted);
  };

  const handleContinue = () => {
    if (accepted) {
      console.log('Terms accepted, proceeding...');
      router.push('/attest-video'); 
      // Add logic to proceed to the next step
    } else {
      alert('Please accept the terms and conditions to continue.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="font-bold mb-1">Loan Approval</h2>
      <p className="text-gray-600 text-xs mb-2">
        We are pleased to inform you that your loan application has been approved.
        Please find the details below.
      </p>

      <div className="flex items-center mb-2">
        <img src="/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
        <span className="font-medium">{firstName || 'Isaac'} {lastName || 'Onyeka'}</span>
      </div>

      <div className="bg-blue-50 p-1 px-3 rounded-lg mb-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500">Loan Amount</p>
            <p className="text-lg font-medium">{loanAmount || 'N150,000'}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Monthly Repayment</p>
            <p className="text-lg font-medium">{monthlyPayment || 'N24,000'}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Loan Duration</p>
            <p className="text-lg font-medium">{duration || '3 Months'}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Repayment Date</p>
            <p className="text-lg font-medium">{repaymentDate || '31-07-2024'}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <input 
          type="checkbox" 
          id="acceptTerms" 
          checked={accepted} 
          onChange={handleCheckboxChange} 
          className="mr-2"
        />
        <label htmlFor="acceptTerms" className="text-xs text-gray-700">
          By clicking this box, you accept the loan <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
        </label>
      </div>

      <button
        onClick={handleContinue}
        className="w-full bg-blue-800 text-white py-3 rounded font-medium hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Continue
      </button>
    </div>
  );
} 