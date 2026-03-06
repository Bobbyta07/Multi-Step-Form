import { useState } from 'react';

const steps = [
  {
    number: 1,
    title: 'YOUR INFO',
  },
  {
    number: 2,
    title: 'SELECT PLAN',
  },
  {
    number: 3,
    title: 'ADD-ONS',
  },
  {
    number: 4,
    title: 'SUMMARY',
  },
];

function List(props) {
  function changeState(stepNumber) {
    props.setActiveStep(stepNumber);
  }

  return (
    <ul
      className="
      flex justify-center  h-40 md:h-full w-full
      md:flex-col items-start mt-8 md:gap-2 md:justify-start
    "
    >
      {steps.map((step) => (
        <li
          onClick={() => changeState(step.number)}
          key={step.number}
          className="
            flex flex-col md:flex-row
            items-center justify-center
            gap-1 md:gap-4
            p-2 md:p-3
            rounded-lg
            transition
            cursor-pointer
          "
        >
          {/* Circle */}
          {props.activeStep === step.number ? (
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-black text-xs font-medium">
              {step.number}
            </div>
          ) : (
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white text-white text-xs font-medium">
              {step.number}
            </div>
          )}

          {/* Hidden on mobile */}
          <div className="hidden md:block">
            <p className="text-xs text-gray-300 uppercase tracking-widest">
              Step {step.number}
            </p>
            <p className="text-white font-bold text-xs">{step.title}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default List;
