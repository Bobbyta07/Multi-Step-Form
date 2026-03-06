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
    <div className="flex flex-col m-4 w-full max-w-md ">
      <div
        className={
          props.formData.submitted
            ? null
            : 'bg-slate-100 p-4 rounded-lg md:bg-transparent md:p-0 md:rounded-none'
        }
      >
        {props.formData.submitted ? null : (
          <Header activeStep={props.activeStep} />
        )}
      </div>

      {props.activeStep === 1 && (
        <div className="flex flex-col gap-4 mt-6 w-full">
          <div className=" bg-slate-100 p-4 rounded-lg md:bg-transparent md:p-0 md:rounded-none">
            <Form
              activeStep={props.activeStep}
              setActiveStep={props.setActiveStep}
              formData={props.formData}
              setFormData={props.setFormData}
            />
          </div>

          <div className="mt-20">
            <Button
              activeStep={props.activeStep}
              setActiveStep={props.setActiveStep}
              setFormData={props.setFormData}
            />
          </div>
        </div>
      )}
      {props.activeStep === 2 && (
        <div>
          <div className="flex flex-col gap-4 mt-6 w-full">
            <div className=" bg-slate-100 p-4 rounded-lg md:bg-transparent md:p-0 md:rounded-none w-full">
              <Plan
                checked={props.formData.checked}
                onChange={handleChange}
                formData={props.formData}
                setFormData={props.setFormData}
              />
              <Swit checked={props.formData.checked} onChange={handleChange} />
            </div>
          </div>
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
            <Finish
              formData={props.formData}
              setActiveStep={props.setActiveStep}
            />
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
