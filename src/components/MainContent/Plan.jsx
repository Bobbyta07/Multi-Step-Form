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
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {plansToDisplay.map((e) => {
        const isSelected = props.formData.selectedPlan === e.id;

        return (
          <div
            key={e.id}
            onClick={() => updateBorder(e.id)}
            className={`
              group cursor-pointer relative overflow-hidden
              rounded-2xl p-6
              transition-all duration-300 ease-out
              border
              ${
                isSelected
                  ? 'border-purple-600 shadow-xl scale-[1.03]'
                  : 'border-gray-200 hover:border-purple-400'
              }
              bg-white/70 backdrop-blur-md
              hover:shadow-2xl hover:-translate-y-2
            `}
          >
            {/* Glow effect when selected */}
            {isSelected && (
              <div className="absolute inset-0 rounded-2xl ring-2 ring-purple-500 ring-offset-2 pointer-events-none animate-pulse"></div>
            )}

            {/* Icon */}
            <div className="mb-6">
              <img
                src={e.img}
                alt={e.textHead}
                className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                {e.textHead}
              </h3>

              <p className="text-slate-600 text-base font-medium">
                {e.textValue}
              </p>

              {props.checked && (
                <p className="text-sm text-purple-600 font-semibold animate-fadeIn">
                  {e.details}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Plan;
