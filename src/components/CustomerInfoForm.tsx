'use client';

import { useLoanStore } from '@/store/loanStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import StepProgressCircle from './StepProgressCircle';

export default function CustomerInfoForm() {
  const router = useRouter();
  const { 
    currentStep, 
    totalSteps, 
    customerInfo, 
    nextStep, 
    prevStep, 
    updateCustomerInfo 
  } = useLoanStore();

  const handleInputChange = (field: keyof typeof customerInfo, value: string) => {
    updateCustomerInfo(field, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep < totalSteps) {
      nextStep();
    } else {
      // Form submission complete - you could redirect or show success
      console.log('Form submitted with data:', customerInfo);
      // router.push('/confirmation');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-md font-medium">Customer Information</h2>
        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
          <span className="">Step {currentStep} of {totalSteps}</span>
          <StepProgressCircle 
            currentStep={currentStep} 
            totalSteps={totalSteps} 
            />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {currentStep === 1 ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                    </label>
                    <input
                    id="firstName"
                    type="text"
                    value={customerInfo.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                    </label>
                    <input
                    id="lastName"
                    type="text"
                    value={customerInfo.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email address
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone number
                    </label>
                    <input
                        id="phoneNumber"
                        type="tel"
                        value={customerInfo.phoneNumber}
                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                <label htmlFor="bvn" className="block text-sm font-medium text-gray-700 mb-1">
                    IPPIS number
                </label>
                <input
                    id="bvn"
                    type="text"
                    value={customerInfo.bvn}
                    onChange={(e) => handleInputChange('bvn', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>

                <div>
                <label htmlFor="bank" className="block text-sm font-medium text-gray-700 mb-1">
                    BVN
                </label>
                <input
                    id="bank"
                    type="text"
                    value={customerInfo.bank}
                    onChange={(e) => handleInputChange('bank', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>
            </div>

            <div>
              <label htmlFor="bank" className="block text-sm font-medium text-gray-700 mb-1">
                State of Origin
              </label>
              <input
                id="bank"
                type="text"
                value={customerInfo.bank}
                onChange={(e) => handleInputChange('bank', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="text-primary px-4 py-2 rounded border border-primary hover:bg-gray-50"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
} 