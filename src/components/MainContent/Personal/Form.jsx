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
  function handleChange(event) {
    const { name, value } = event.target;

    console.log('Input changed:', name, value); // Debugging log
    props.setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return (
    <div className="flex flex-col gap-4 mt-6 w-full">
      {fields.map((field) => (
        <Input
          key={field.id}
          id={field.id}
          name={field.id}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          value={props.formData[field.id]}
          onChange={handleChange}
        />
      ))}

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
