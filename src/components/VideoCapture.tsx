'use client';

import { useLoanStore } from '@/store/loanStore';
import { useEffect, useRef, useState } from 'react';
import VideoReview from './VideoReview';

export default function VideoCapture() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [recordingDone, setRecordingDone] = useState(false);
  const { paymentPlanData: { loanAmount, monthlyPayment, duration, interestRate, repaymentDate }, customerInfo: { firstName } } = useLoanStore();
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const getVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    getVideo();

    return () => {
      stopVideoStream();
    };
  }, []);

  const stopVideoStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  const handleRecordingDone = () => {
    stopVideoStream();
    setRecordingDone(true);
  };

  if (recordingDone) {
    return <VideoReview />;
  }

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <video ref={videoRef} autoPlay className="w-full h-40 bg-black mb-1"></video>
      <div className="">
        <button
          onClick={handleRecordingDone}
          className="size-12 bg-red-500 rounded-full"
        ></button>
      </div>
      <div className="text-justify">
        <p className="text-xs mb-1">
            I, "{firstName}", hereby accept the loan of "{loanAmount} FOR {duration} months", 
            with a monthly repayment of "{monthlyPayment}" naira from Oxygen dated "{repaymentDate}".
        </p>
        <p className="text-xs">
            I agree to the terms and conditions communicated on the loan offer, that loan repayments, 
            liquidation payment will not be paid into any account apart from the companies account and 
            I AM NOT PAYING ANY AGENT.
        </p>
      </div>
    </div>
  );
} 