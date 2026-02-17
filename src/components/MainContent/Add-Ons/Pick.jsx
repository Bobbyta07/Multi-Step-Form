import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const extensions = [
  {
    id: 1,
    name: 'Online service',
    description: 'Access to multiplayer games',
    price: '+$1/mo',
  },
  {
    id: 2,
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: '+$2/mo',
  },
  {
    id: 3,
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: '+$2/mo',
  },
];

function CheckboxList() {
  // store selected ids
  const [selected, setSelected] = useState([]);

  const handleChange = (id) => {
    setSelected(
      (prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id) // remove if already selected
          : [...prev, id] // add if not selected
    );
  };

  return (
    <div className="mb-20">
      {extensions.map((extension) => (
        <div
          key={extension.id}
          className={`flex justify-between items-center border ${selected.includes(extension.id) ? 'border-blue-800 bg-gray-100' : 'border-gray-300'} rounded-lg p-4 mt-6`}
        >
          <div className="flex gap-3">
            <Checkbox
              checked={selected.includes(extension.id)}
              onChange={() => handleChange(extension.id)}
              sx={{
                color: '#1A2CA3',
                '&.Mui-checked': {
                  color: '#1A2CA3',
                },
              }}
            />

            <div>
              <h3 className="font-Ubuntu font-bold text-blue-950">
                {extension.name}
              </h3>
              <p className="font-Ubuntu font-normal">{extension.description}</p>
            </div>
          </div>

          <div>
            <p className="font-Ubuntu font-normal text-purple-600">
              {extension.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CheckboxList;
