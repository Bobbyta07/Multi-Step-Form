import { useState } from 'react';

function Button(props) {
  function handleClick() {
    if (props.activeStep === 4) {
      alert('Form submitted!');

      props.setActiveStep(1);
    } else {
      props.setActiveStep(props.activeStep + 1);
    }
  }

  function handleGoBack() {
    if (props.activeStep === 1) {
      return;
    }
    props.setActiveStep(props.activeStep - 1);
  }

  return props.activeStep < 2 ? (
    <div className="flex justify-end items-center mt-6">
      <button
        onClick={handleClick}
        className="bg-blue-800 hover:bg-blue-900 text-white font-Ubuntu font-medium py-2 px-4 rounded"
      >
        {props.activeStep < 4 ? 'Next Step' : 'Confirm'}
      </button>
    </div>
  ) : (
    <div className="flex justify-between items-center mt-6">
      <p onClick={handleGoBack} className="text-gray-500 cursor-pointer">
        Go Back
      </p>

      <button
        onClick={handleClick}
        className="bg-blue-800 hover:bg-blue-900 text-white font-Ubuntu font-medium py-2 px-4 rounded"
      >
        {props.activeStep < 4 ? 'Next Step' : 'Confirm'}
      </button>
    </div>
  );
}

export default Button;
