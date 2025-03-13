'use client';

export default function SuccessComponent() {
  return (
    <div className="w-full max-w-md mx-auto text-center">
      <div className="mb-6">
        <div className="w-16 h-16 mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>
        <p className="text-lg font-semibold mb-2">Loan application successful!</p>
        <a href="/application-approval" className="text-blue-600 hover:underline">Return to application page</a>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">You can also download the Oxygen App on your phone to apply:</p>
        <div className="flex justify-center space-x-4">
          <img src="/google-play-badge.svg" alt="Get it on Google Play" className="w-24" />
          <img src="/app-store-badge.svg" alt="Download on the App Store" className="w-24" />
        </div>
      </div>
    </div>
  );
} 