import { useState } from 'react';
import Switch from '@mui/material/Switch';

function Swit() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className=" flex justify-center items-center gap-5 bg-gray-100 mt-6 rounded-md mb-20">
      <p
        className={`font-Ubuntu  ${!checked ? 'text-purple-900 font-bold' : 'text-gray-500 font-normal'}`}
      >
        Monthly
      </p>
      <Switch
        checked={checked}
        onChange={handleChange}
        slotProps={{ input: { 'aria-label': 'controlled' } }}
      />

      <p
        className={`font-Ubuntu  ${checked ? 'text-purple-900 font-bold' : 'text-gray-500 font-normal'}`}
      >
        Yearly
      </p>
    </div>
  );
}

export default Swit;
