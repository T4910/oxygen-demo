'use client';

import PaymentPlanBasic from '@/components/PaymentPlanBasic';
import PaymentPlanDetailed from '@/components/PaymentPlanDetailed';
import { useLoanStore } from '@/store/loanStore';

export default function LoanForm() {
  // Get state and actions from Zustand store
  const { 
    employer, 
    amount, 
    duration, 
    step, 
    paymentPlanData,
    setEmployer,
    setAmount,
    setDuration,
    nextStep
  } = useLoanStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Move to next step
    nextStep();
    
    // Final submission logic can stay here
    if (step === 3) {
      console.log({ employer, amount, duration });
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="employer" className="block text-sm font-medium text-gray-700 mb-1">
                Select employer
              </label>
              <select
                id="employer"
                value={employer}
                onChange={(e) => setEmployer(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>Select your employer</option>
                <option value="company1">Company 1</option>
                <option value="company2">Company 2</option>
                <option value="company3">Company 3</option>
              </select>
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                Enter amount
              </label>
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter loan amount"
                required
              />
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <select
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>Select loan duration</option>
                <option value="1">1 Month</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-24 bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Continue
            </button>
          </form>
        );
      case 2:
        return (
          <PaymentPlanBasic 
            loanAmount={paymentPlanData.loanAmount} 
            monthlyPayment={paymentPlanData.monthlyPayment} 
            duration={paymentPlanData.duration} 
            onContinue={handleSubmit}
          />
        );
      case 3:
        return (
          <PaymentPlanDetailed
            loanAmount="N100,000"
            repaymentDate={paymentPlanData.repaymentDate}
            interestRate={paymentPlanData.interestRate}
            monthlyPayment="N24,000"
            onContinue={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {renderStepContent()}
    </>
  );
} 