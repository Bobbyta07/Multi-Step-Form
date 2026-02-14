import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "YOUR INFO",
    
  },
  {
    number: 2,
    title: "SELECT PLAN",
    
  },
  {
    number: 3,
    title: "ADD-ONS",
   
  },
  {
    number: 4,
    title: "SUMMARY",
   
  },
];

function List(props) {

  function changeState(stepNumber) {
  props.setActiveStep(stepNumber);
}


  return (
    <ul className="space-y-2">
      {steps.map((step) => (
        <li
          onClick={() => changeState(step.number)}
          key={step.number}
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/10 transition"
        >
          {/* Number Circle */}
          {props.activeStep === step.number ? (
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-green-100 text-black text-xs font-Ubuntu font-medium">
              {step.number}
            </div>
          ) : (
          <div className="w-7 h-7 flex items-center justify-center rounded-full border border-white text-white text-xs font-Ubuntu font-medium">
            {step.number}
          </div>
          )}

          {/* Text Section */}
          <div>
            <p className="text-xs text-gray-300 uppercase tracking-widest">
              Step {step.number}
            </p>
            <p className="text-white font-Ubuntu font-bold text-xs">
              {step.title}
            </p>
            
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
