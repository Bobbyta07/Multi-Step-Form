import Button from '../Button';
import Input from './Input';

const fields = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'e.g. Stephen King' },
  {
    id: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
  },
  {
    id: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: 'e.g. +1 234 567 890',
  },
];

function Form(props) {
  return (
    <div className="flex flex-col gap-4 mt-6 w-full">
      <div className="flex flex-col gap-1"></div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm text-gray-500 font-Ubuntu">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          className=" w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm text-gray-500 font-Ubuntu">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          className=" w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="mt-20">
        <Button
          activeStep={props.activeStep}
          setActiveStep={props.setActiveStep}
        />
      </div>
    </div>
  );
}

export default Form;
