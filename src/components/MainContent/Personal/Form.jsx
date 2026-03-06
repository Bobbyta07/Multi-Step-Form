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
    <div>
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
    </div>
  );
}

export default Form;
