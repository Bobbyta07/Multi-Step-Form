import { useState } from 'react';

function Button(props) {
  return props.activeStep < 2 ? (
    <div className="flex justify-end items-center mt-6">
      <button className="bg-blue-800 hover:bg-blue-900 text-white font-Ubuntu font-medium py-2 px-4 rounded">
        {props.activeStep < 4 ? 'Next Step' : 'Confirm'}
      </button>
    </div>
  ) : (
    <div className="flex justify-between items-center mt-6">
      <p className="text-gray-500 cursor-pointer">Go Back</p>

      <button className="bg-blue-800 hover:bg-blue-900 text-white font-Ubuntu font-medium py-2 px-4 rounded">
        {props.activeStep < 4 ? 'Next Step' : 'Confirm'}
      </button>
    </div>
  );
}

export default Button;
