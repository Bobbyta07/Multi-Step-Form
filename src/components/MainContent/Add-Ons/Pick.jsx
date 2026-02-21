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

function CheckboxList(props) {
  // store selected ids

  const handleChange = (id) => {
    props.setFormData((prevData) => {
      const isSelected = prevData.addOns.includes(id);
      const updatedAddOns = isSelected
        ? prevData.addOns.filter((item) => item !== id)
        : [...prevData.addOns, id];

      return {
        ...prevData,
        addOns: updatedAddOns,
      };
    });
  };

  return (
    <div className="mb-20">
      {extensions.map((extension) => (
        <div
          key={extension.id}
          className={`flex justify-between items-center border ${props.formData.addOns.includes(extension.id) ? 'border-blue-800 bg-gray-100' : 'border-gray-300'} rounded-lg p-4 mt-6`}
        >
          <div className="flex gap-3">
            <Checkbox
              checked={props.formData.addOns.includes(extension.id)}
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
            <p className="font-medium text-slate-700">{extension.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CheckboxList;
