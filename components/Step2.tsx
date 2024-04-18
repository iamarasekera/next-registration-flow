// Step2.tsx
import React, { useState, ChangeEvent } from 'react';

interface Step2Props {
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: { [key: string]: string }) => void;
}

const Step2: React.FC<Step2Props> = ({ onNext, onPrevious, onChange }) => {
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
    <div className="flex flex-col gap-4">
       <p className="text-lg font-semibold">Step 2:</p>
      <input type="text" name="organization" placeholder="Organization" value={formData.organization} onChange={handleChange} className="border border-black rounded outline-none px-4 py-2" style={{ color: 'black' }} />
      <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="border border-black rounded outline-none px-4 py-2" style={{ color: 'black' }} />
      <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="border border-black rounded outline-none px-4 py-2" style={{ color: 'black' }}/>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={onPrevious}> Back </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onNext}>Create Account</button>
    </div>
  );
};

export default Step2;
