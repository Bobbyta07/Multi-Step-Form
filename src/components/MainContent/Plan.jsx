import { useState } from 'react';
import { plansText, yearlyPlans } from '../data';

function Plan(props) {
  const plansToDisplay = props.checked ? yearlyPlans : plansText;

  function updateBorder(id) {
    props.setFormData((prevData) => ({
      ...prevData,
      selectedPlan: id,
    }));
  }

  return (
    <div className="flex gap-2 mt-6">
      {plansToDisplay.map((e) => {
        return (
          <div
            key={e.id}
            onClick={() => updateBorder(e.id)}
            className={`flex flex-col justify-start gap-9 w-1/3 p-3 rounded-md shadow-sm border ${
              props.formData.selectedPlan === e.id
                ? 'border-purple-500'
                : 'border-gray-300'
            }`}
          >
            <div>
              <img src={e.img} alt={e.textHead} />
            </div>

            <div>
              <h3 className="font-Ubuntu font-bold text-sky-900">
                {e.textHead}
              </h3>
              <p className="font-normal text-slate-700">{e.textValue} </p>
              {props.checked && (
                <p className="text-sm text-sky-900 font-Ubuntu">{e.details}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Plan;
