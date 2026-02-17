import Header from './Header';
import Form from './Form';
import Plan from './Plan';
import Swit from './Swit';
import Button from './Button';
import CheckboxList from './Add-Ons/Pick';

function Main(props) {
  return (
    <div className="flex flex-col m-4 w-full max-w-md  ">
      <Header activeStep={props.activeStep} />

      {props.activeStep === 1 && <Form activeStep={props.activeStep} />}
      {props.activeStep === 2 && (
        <div>
          {' '}
          <Plan />
          <Swit />
          <Button activeStep={props.activeStep} />
        </div>
      )}
      {props.activeStep === 3 && (
        <div>
          <CheckboxList />
          <Button activeStep={props.activeStep} />
        </div>
      )}
    </div>
  );
}

export default Main;
