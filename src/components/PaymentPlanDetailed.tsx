import Link from "next/link";

interface PaymentPlanDetailedProps {
  loanAmount: string;
  repaymentDate: string;
  interestRate: string;
  monthlyPayment: string;
  onContinue: (e: React.FormEvent) => void;
}

export default function PaymentPlanDetailed({
  loanAmount,
  repaymentDate,
  interestRate,
  monthlyPayment,
  onContinue
}: PaymentPlanDetailedProps) {
  return (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Payment plan:
        </label>
        <div className="bg-blue-100 p-5 rounded-md shadow-inner">
          <div className="grid grid-cols-2 gap-4 gap-y-16">
            <div>
              <p className="text-xs text-gray-500">Loan amount</p>
              <p className="text-lg font-medium text-blue-900">{loanAmount}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Repayment Date</p>
              <p className="text-lg font-medium text-blue-900">{repaymentDate}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Interest rate</p>
              <p className="text-lg font-medium text-blue-900">{interestRate}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Loan repayment</p>
              <p className="text-lg font-medium text-blue-900">{monthlyPayment}</p>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/customer-info"
        className="w-24 bg-primary text-white py-2 px-4 rounded bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Continue
      </Link>
    </div>
  );
} 