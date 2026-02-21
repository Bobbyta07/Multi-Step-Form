import React, { useState } from 'react';
import Layout from './components/layout';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'monthly', // or yearly
    planType: '', // arcade, advanced, pro
    addOns: [], // array of selected add-ons
    checked: false, // for the switch component
    selectedPlan: null, // to track the selected plan
  });
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white w-1/2 p-6 border border-gray-300 rounded-lg shadow-lg">
        <Layout formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
}

export default App;
