'use client';

export default function VideoAttestation() {
  const handleReady = () => {
    console.log("User is ready to start the video attestation.");
    // Add logic to proceed to the video recording page
  };

  const handleSkip = () => {
    console.log("User chose to skip the video attestation.");
    // Add logic to skip the video attestation
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="font-bold mb-1">Video Attestation</h2>
      <p className="text-gray-600 text-xs mb-4">Please read the instructions below</p>

      <ul className="text-left text-sm list-disc pl-4 mb-6">
        <li>Make sure you are in a well lit environment while making the video.</li>
        <li>Make sure your camera is well positioned.</li>
        <li>Kindly read the paragraph that will be shown on the recording page.</li>
        <li>Be audible enough.</li>
        <li>Click "I'm ready" when you are ready to start.</li>
      </ul>

      <button
        onClick={handleReady}
        className="w-full bg-blue-800 text-white py-3 rounded font-medium hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
      >
        I'm ready
      </button>

      <button
        onClick={handleSkip}
        className="text-blue-600 text-center w-full hover:underline"
      >
        Skip
      </button>
    </div>
  );
} 