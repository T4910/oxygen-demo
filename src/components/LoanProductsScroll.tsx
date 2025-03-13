'use client';

import Link from 'next/link';
import React from 'react';

const loanProducts = [
  {
    id: 1,
    title: 'Salary Loan',
    description: 'Oxygen Salary Loan offers quick financial access to salary earners. Borrow between N50,000 and N5,000,000 with flexible repayment tenure of up to 12 months. Interest rate competitive. Repayment through salary account.',
    buttonVariant: 'white',
  },
  {
    id: 2,
    title: 'Corper Loan',
    description: 'Oxygen Salary Loan offers quick financial access to corpers. Borrow between N50,000 and N500,000 with flexible repayment tenure of up to 12 months. Interest rate competitive. Repayment through salary account.',
    buttonVariant: 'blue',
  },
  // You can add more loan products as needed
];

export default function LoanProductsScroll() {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-3 text-black">Loan Products</h2>
      
      <div className="flex overflow-x-auto gap-4 hide-scrollbar">
        {loanProducts.map((product) => (
          <div 
            key={product.id}
            className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md"
          >
            <div className="border border-gray-300 rounded-lg bg-white p-4 h-full flex flex-col">
              <div className="mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold mb-1">{product.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{product.description}</p>
              <div className="mt-3">
                <Link href="/get-loan-form">
                  <button className="px-4 py-2 rounded font-medium bg-blue-800 text-sm text-white">
                    Apply Here
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 