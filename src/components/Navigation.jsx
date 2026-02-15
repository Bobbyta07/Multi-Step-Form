import Back from "./back";
import Button from "./MainContent/Button";

function Navigate(props){

    return (

        <div >

            <Back />

            <Button activeStep={props.activeStep}/>

                </div>

    )
}