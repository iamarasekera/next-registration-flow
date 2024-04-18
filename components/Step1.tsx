// Step1.tsx
import React, { useState, ChangeEvent } from 'react';

interface Step1Props {
 // Function to proceed to the next step in the registration flow
  onNext: () => void;
 // Function to handle changes in form data
  onChange: (data: { [key: string]: string }) => void;
}

const Step1: React.FC<Step1Props> = ({ onNext, onChange }) => {
  // Define state variable using the useState hook
  // - 'formData': stores the form data collected in Step1
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    reEnterPassword: '',
  });

  // Fnction to handle changes in form input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Extract 'name' and 'value' from the input field
    const { name, value } = e.target;
    // Update the 'formData' state with the new value for the input field
    setFormData({ ...formData, [name]: value });
    // Call the 'onChange' function passed from the parent component to update the overall form data
    onChange({ [name]: value });
  };

  return (
    <div>
      {/* Form inputs for email, password, and re-enter password */}
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <input type="password" name="reEnterPassword" placeholder="Re-enter Password" value={formData.reEnterPassword} onChange={handleChange} />
       {/* Button to proceed to the next step in the registration flow */}
      <button onClick={onNext}>Get Started</button>
    </div>
  );
};

export default Step1;
