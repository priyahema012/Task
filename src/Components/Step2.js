// Step2.js
import React from 'react';

const Step2 = ({ formData, setFormData }) => {
  return (
    <div>
      <h2>Step 2: Contact Information</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
    </div>
  );
};

export default Step2;
