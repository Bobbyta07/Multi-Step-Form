import { useState } from 'react';
import List from './List';
import Main from './MainContent/Main';

function Layout(props) {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="relative  md:grid md:grid-cols-[1fr_3fr] md:gap-6 h-full w-full p-2 md:overflow-hidden">
      {/* Sidebar */}
      <div
        className="
        h-[200px] md:h-full w-full
        bg-[url('/images/bg-sidebar-mobile.svg')]
        md:bg-[url('/images/bg-sidebar-desktop.svg')]
        bg-no-repeat bg-cover md
        rounded-lg
      "
      >
        <List activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>

      {/* Main overlay */}
      <div
        className="
        absolute top-[120px] left-[46%] -translate-x-1/2
        w-[90%]
        md:static md:translate-x-0 md:w-full
        p-4
      "
      >
        <Main
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          formData={props.formData}
          setFormData={props.setFormData}
        />
      </div>
    </div>
  );
}

export default Layout;
