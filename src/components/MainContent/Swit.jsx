import { useState } from 'react';
import Switch from '@mui/material/Switch';

function Swit(props) {
  return (
    <div className=" flex justify-center items-center gap-5 bg-gray-100 mt-6 rounded-md mb-20">
      <p
        className={`font-Ubuntu  ${!props.checked ? 'font-medium text-slate-700' : 'text-gray-500 font-normal'}`}
      >
        Monthly
      </p>
      <Switch
        checked={props.checked}
        onChange={props.onChange}
        slotProps={{ input: { 'aria-label': 'controlled' } }}
      />

      <p
        className={`font-Ubuntu  ${props.checked ? 'font-medium text-slate-700' : 'text-gray-500 font-normal'}`}
      >
        Yearly
      </p>
    </div>
  );
}

export default Swit;
