import { useState } from "react";
import List from "./List";
import Main from "./MainContent/Main";



function Layout(props) {

  const [activeStep, setActiveStep] = useState(1);

  function changeState(stepNumber) {
  setActiveStep(stepNumber);
}

  return (
    <div className="grid grid-cols-[1fr_3fr] gap-6 h-full w-full">
      <div className="h-full w-full bg-[url('/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover rounded-lg">
        <List 
        
         activeStep={activeStep}
        setActiveStep={setActiveStep}
        />
      </div>

      <div className="h-full w-full min-w-0">
         <Main activeStep={activeStep}/>
        
       
      </div>
    </div>
  );
}

export default Layout;
