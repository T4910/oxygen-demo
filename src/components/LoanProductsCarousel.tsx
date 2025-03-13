'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

type LoanProduct = {
  id: number;
  title: string;
  description: string;
  buttonVariant: 'white' | 'blue';
};

export default function LoanProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const loanProducts: LoanProduct[] = [
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
    // You can add more loan products here as needed
  ];

  const nextSlide = () => {
    if (currentIndex < loanProducts.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollToCard(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToCard(currentIndex - 1);
    }
  };

  const scrollToCard = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-3 text-black">Loan Products</h2>
      
      <div className="relative">
        {/* Navigation arrows */}
        {currentIndex > 0 && (
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-5 z-10 bg-white rounded-full p-2 shadow-md"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}
        
        {currentIndex < loanProducts.length - 1 && (
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-5 z-10 bg-white rounded-full p-2 shadow-md"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}

        {/* Slider */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {loanProducts.map((product) => (
            <div 
              key={product.id}
              className="flex-shrink-0 w-full snap-center"
            >
              <div className="border border-gray-300 rounded-lg bg-white p-4 mx-2 h-72 flex flex-col">
                <div className="mb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Image
                      src="/money-icon.svg" 
                      alt="Money icon"
                      width={24}
                      height={24}
                      className="text-blue-500"
                      onError={(e) => {
                        // Fallback if SVG is not available
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%234299e1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>';
                      }}
                    />
                  </div>
                </div>
                <h3 className="font-semibold mb-1">{product.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{product.description}</p>
                <div className="mt-0.5">
                    <Link href="/get-loan-form">
                        <button 
                            className={`px-4 py-2 rounded font-medium bg-blue-800 text-sm text-white`}
                        >
                            Apply Here
                        </button>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots indicators */}
        <div className="flex justify-center mt-4">
          {loanProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToCard(index);
              }}
              className={`h-2 w-2 mx-1 rounded-full ${
                currentIndex === index ? 'bg-white' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 