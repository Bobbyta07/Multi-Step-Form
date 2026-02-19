import Header from './Header';
import Form from './Form';
import Plan from './Plan';
import Swit from './Swit';
import Button from './Button';
import CheckboxList from './Add-Ons/Pick';
import Finish from './Summary/Finish';
import Total from './Summary/Total';
import { useState } from 'react';

function Main(props) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="flex flex-col m-4 w-full max-w-md  ">
      <Header activeStep={props.activeStep} />

      {props.activeStep === 1 && (
        <Form
          activeStep={props.activeStep}
          setActiveStep={props.setActiveStep}
        />
      )}
      {props.activeStep === 2 && (
        <div>
          {' '}
          <Plan checked={checked} onChange={handleChange} />
          <Swit checked={checked} onChange={handleChange} />
          <Button
            activeStep={props.activeStep}
            setActiveStep={props.setActiveStep}
          />
        </div>
      )}
      {props.activeStep === 3 && (
        <div>
          <CheckboxList />
          <Button
            activeStep={props.activeStep}
            setActiveStep={props.setActiveStep}
          />
        </div>
      )}

      {props.activeStep === 4 && (
        <div>
          <Finish />
          <Total />
          <Button
            activeStep={props.activeStep}
            setActiveStep={props.setActiveStep}
          />
        </div>
      )}
    </div>
  );
}

export default Main;
