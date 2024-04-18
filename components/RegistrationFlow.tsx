// RegistrationFlow.tsx
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

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
      {step === 2 && <Step2 onNext={handleNextStep} onChange={handleFormDataChange} />}
      {step === 3 && <Step3 onPrevious={handlePreviousStep} />}
    </div>
  );
};

export default RegistrationFlow;
