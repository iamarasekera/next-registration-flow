// RegistrationFlow.tsx
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const RegistrationFlow = () => {
// Define state variables using the useState hook
  // - 'step': represents the current step in the registration flow
  // - 'formData': stores the form data collected from the registration flow
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

 //Function that handles moving to the next step in the registration flow
  const handleNextStep = () => {
    // Increment the 'step' state to move to the next step
    setStep(step + 1);
  };

 // Function that handles moving to the previous step in the registration flow
  const handlePreviousStep = () => {
    // Decrement the 'step' state to move to the previous step
    setStep(step - 1);
  };

  // Function that  handles changes in form data
  // This function is passed down to child components to update the 'formData' state
  const handleFormDataChange = (data: { [key: string]: string }) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div>
      {/* Conditional rendering based on the current step */}
      {/* Render Step1 component if 'step' is 1 */}
      {step === 1 && <Step1 onNext={handleNextStep} onChange={handleFormDataChange} />}
      {/* Render Step2 component if 'step' is 2 */}
      {step === 2 && <Step2 onNext={handleNextStep} onChange={handleFormDataChange} />}
      {/* Render Step3 component if 'step' is 3 */}
      {step === 3 && <Step3 onPrevious={handlePreviousStep} />}
    </div>
  );
};

export default RegistrationFlow;
