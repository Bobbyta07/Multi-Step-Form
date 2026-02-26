import Header from './Header';
import Form from './Personal/Form';
import Plan from './Plan';
import Swit from './Swit';
import Button from './Button';
import CheckboxList from './Add-Ons/Pick';
import Finish from './Summary/Finish';
import { useState } from 'react';
import ThankYou from './Thanks/ThankYou';

function Main(props) {
  const handleChange = (event) => {
    props.setFormData((prevData) => ({
      ...prevData,
      checked: event.target.checked,
    }));

    props.checked
      ? props.setFormData((prevData) => ({
          ...prevData,
          plan: 'yearly',
        }))
      : props.setFormData((prevData) => ({
          ...prevData,
          plan: 'monthly',
        }));
  };
  return (
    <div className="flex flex-col m-4 w-full max-w-md  ">
      {props.formData.submitted ? null : (
        <Header activeStep={props.activeStep} />
      )}

      {props.activeStep === 1 && (
        <Form
          activeStep={props.activeStep}
          setActiveStep={props.setActiveStep}
          formData={props.formData}
          setFormData={props.setFormData}
        />
      )}
      {props.activeStep === 2 && (
        <div>
          {' '}
          <Plan
            checked={props.formData.checked}
            onChange={handleChange}
            formData={props.formData}
            setFormData={props.setFormData}
          />
          <Swit checked={props.formData.checked} onChange={handleChange} />
          <Button
            activeStep={props.activeStep}
            setActiveStep={props.setActiveStep}
            setFormData={props.setFormData}
          />
        </div>
      )}
      {props.activeStep === 3 && (
        <div>
          <CheckboxList
            formData={props.formData}
            setFormData={props.setFormData}
          />
          <Button
            activeStep={props.activeStep}
            setActiveStep={props.setActiveStep}
            setFormData={props.setFormData}
          />
        </div>
      )}

      {props.activeStep === 4 &&
        (props.formData.submitted ? (
          <ThankYou />
        ) : (
          <div>
            <Finish formData={props.formData} />
            <Button
              activeStep={props.activeStep}
              setActiveStep={props.setActiveStep}
              setFormData={props.setFormData}
            />
          </div>
        ))}
    </div>
  );
}

export default Main;
