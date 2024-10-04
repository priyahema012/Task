// StepperForm.js
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Stepperform = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  // Function to handle next step
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Function to handle previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Conditional rendering for the steps
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step3 formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>
      <div>{renderStep()}</div>
      <div>
        <button onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </button>
        {currentStep < 3 && (
          <button onClick={nextStep}>
            Next
          </button>
        )}
        {currentStep === 3 && (
          <button onClick={() => alert('Form submitted!')}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepperform;
