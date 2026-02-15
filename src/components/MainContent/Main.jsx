import Header from "./Header";
import Form from "./Form";






function Main(props){

    return (

        <div className="flex flex-col m-4 w-full max-w-md  ">
            


            <Header activeStep={props.activeStep} />

            <Form activeStep={props.activeStep} />

        </div>
    );
}


export default Main;