import { useState } from 'react';

const plansText = [
  {
    id: 1,
    img: '/images/icon-arcade.svg',
    textHead: 'Arcade',
    textValue: '$9/mo',
  },

  {
    id: 2,
    img: '/images/icon-advanced.svg',
    textHead: 'Advanced',
    textValue: '$12/mo',
  },
  {
    id: 3,
    img: '/images/icon-pro.svg',
    textHead: 'Pro',
    textValue: '$15/mo',
  },
];

function Plan() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  function updateBorder(id) {
    setSelectedPlan(id);
  }

  return (
    <div className="flex gap-2 mt-6">
      {plansText.map((e) => {
        return (
          <div
            key={e.id}
            onClick={() => updateBorder(e.id)}
            className={`flex flex-col justify-start gap-9 w-1/3 p-4 rounded-md shadow-sm border ${
              selectedPlan === e.id ? 'border-purple-500' : 'border-gray-300'
            }`}
          >
            <div>
              <img src={e.img} alt={e.textHead} />
            </div>

            <div>
              <h3 className="font-Ubuntu font-bold text-sky-900">
                {e.textHead}
              </h3>
              <p className="font-normal text-slate-700">{e.textValue}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Plan;
