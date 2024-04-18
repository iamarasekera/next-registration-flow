// RegistrationFlow.tsx
import React, { useState } from 'react';
import Step1 from './Step1';

const RegistrationFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleFormDataChange = (data: { [key: string]: string }) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNextStep} onChange={handleFormDataChange} />}
    </div>
  );
};

export default RegistrationFlow;
