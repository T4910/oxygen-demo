'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function VideoReview() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleSubmit = () => {
    console.log("Video submitted.");
    // Add logic to submit the video
  };

  const handleRedo = () => {
    console.log("Redo the video.");
    router.refresh();
    // Add logic to redo the video recording
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text font-bold">Video Attestation</h2>
      <p className="text-gray-600 text-sm mb-2">Please read the instructions below</p>

      <div className="relative mb-2">
        <video ref={videoRef} controls className="w-full h-40 bg-black">
          <source src="/path-to-recorded-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-12 h-12 bg-white rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" />
            </svg>
          </button>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-800 text-white py-3 rounded font-medium hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-2"
      >
        Submit
      </button>

      <button
        onClick={handleRedo}
        className="text-blue-600 text-center w-full hover:underline"
      >
        Re-do
      </button>
    </div>
  );
} 