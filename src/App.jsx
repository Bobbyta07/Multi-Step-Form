import React, { useState } from 'react';
import Layout from './components/layout';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    planType: 1, // arcade, advanced, pro
    addOns: [], // array of selected add-ons
    checked: false, // for the switch component
    selectedPlan: 1, // to track the selected plan
    submitted: false,
  });

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white w-1/2  md:p-3 md:border md:border-gray-300 md:rounded-lg md:shadow-lg ">
        <Layout formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
}

export default App;
