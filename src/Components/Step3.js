// Step3.js
import React from 'react';

const Step3 = ({ formData }) => {
  return (
    <div>
      <h2>Step 3: Review Details</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
    </div>
  );
};

export default Step3;
