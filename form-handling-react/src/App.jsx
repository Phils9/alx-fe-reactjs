import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import './App.css';
function App() {
  return (
    <div>
      <h1>User Registration Forms</h1>
      
      <div className="form-container">
        <h2>Controlled Component Form</h2>
        <RegistrationForm />
      </div>

      <div className="form-container">
        <h2>Formik Form</h2>
        <FormikForm />
      </div>
    </div>
  );
}

export default App;