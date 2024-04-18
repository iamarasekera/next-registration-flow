// Step3.tsx
import React from 'react';

interface Step3Props {
  onPrevious: () => void;
}

const Step3: React.FC<Step3Props> = ({ onPrevious }) => {
  return (
    <div>
      <h2>Check Your Email</h2>
      <p>We sent you an email with further instructions.</p>
      <button onClick={onPrevious}>Back</button>
      <button>Open Email App</button>
    </div>
  );
};

export default Step3;