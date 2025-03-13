import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LoanForm from '@/components/LoanForm';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oxygen - Get A Loan',
  description: 'Get a loan in 5 minutes with Oxygen',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          <Header />
          <div className="w-full min-h-[500px] flex items-center max-lg:justify-center pt-[13dvh] lg:pl-32">
            <div className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-sm rounded-lg shadow-xl w-full max-w-md md:max-w-xl lg:max-w-md p-8">
              <h1 className="text-2xl font-bold mb-1">Get A Loan In 5 Minutes</h1>
              <div className="underline-custom"></div>
                {children}
            </div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
} 