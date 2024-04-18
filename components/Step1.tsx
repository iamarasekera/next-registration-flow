// Step1.tsx
import React, { useState, ChangeEvent } from 'react';

interface Step1Props {
  onNext: () => void;
  onChange: (data: { [key: string]: string }) => void;
}

const Step1: React.FC<Step1Props> = ({ onNext, onChange }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    reEnterPassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onChange({ [name]: value });
  };

  return (
    <div>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <input type="password" name="reEnterPassword" placeholder="Re-enter Password" value={formData.reEnterPassword} onChange={handleChange} />
      <button onClick={onNext}>Get Started</button>
    </div>
  );
};

export default Step1;
