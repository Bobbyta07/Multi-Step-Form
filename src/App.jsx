import React, { useState } from "react";
import Layout from "./components/layout";




function App() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white w-1/2 p-6 border border-gray-300 rounded-lg shadow-lg">
        <Layout />
      </div>
    </div>
  );
}

export default App;
