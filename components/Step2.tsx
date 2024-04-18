// Step2.tsx
import React, { useState, ChangeEvent } from 'react';

interface Step2Props {
  onNext: () => void;
  onChange: (data: { [key: string]: string }) => void;
}

const Step2: React.FC<Step2Props> = ({ onNext, onChange }) => {
  const [formData, setFormData] = useState({
    organization: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onChange({ [name]: value });
  };

  return (
    <div>
      <input type="text" name="organization" placeholder="Organization" value={formData.organization} onChange={handleChange} />
      <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
      <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
      <button onClick={onNext}>Create Account</button>
    </div>
  );
};

export default Step2;
