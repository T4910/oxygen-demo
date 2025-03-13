import Link from "next/link";

interface PaymentPlanBasicProps {
  loanAmount: string;
  monthlyPayment: string;
  duration: string;
  onContinue: (e: React.FormEvent) => void;
}

export default function PaymentPlanBasic({ 
  loanAmount, 
  monthlyPayment, 
  duration, 
  onContinue 
}: PaymentPlanBasicProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Payment plan:
        </label>
        <div className="bg-gray-100 p-2 rounded-md shadow-inner">
          <p className="text-sm text-gray-600 mb-2">You repayment on a <span className="text-xl font-semibold text-blue-900 mb-1">{loanAmount}</span> loan is<br/>
          <span className="text-xl font-semibold text-blue-900 mb-1">{monthlyPayment}</span> per month for <span className="text-xl font-semibold text-blue-900 mb-1">{duration}</span></p>
          <button onClick={onContinue} className="mt-4 text-blue-900 text-xs underline font-semibold hover:cursor-pointer">Tap here to see full details</button>
          
        </div>
      </div>

      {/* <Link href="/get-loan-form"> */}
        <button onClick={onContinue} className="w-24 mt-28 bg-primary text-white py-2 px-4 rounded hover:cursor-pointer bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Continue
        </button>
      {/* </Link> */}
    </div>
  );
} 