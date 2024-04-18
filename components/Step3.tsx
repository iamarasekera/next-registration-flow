// Step3.tsx
import React from 'react';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

interface Step3Props {
  onPrevious: () => void;
}

const Step3: React.FC<Step3Props> = ({ onPrevious }) => {
  return (
    <div className="flex flex-col gap-4">
       <p className="text-lg font-semibold">Step 3:</p>
      <h2 className="text-lg font-semibold text-center">Check Your Email</h2>
      <p className="text-lg font-semibold">We sent you an email with further instructions.</p>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={onPrevious}> Back </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Open Email App</button>
    </div>
  );
};

export default Step3;