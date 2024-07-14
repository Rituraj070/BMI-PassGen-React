import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BMI from './BMI';
import reportWebVitals from './reportWebVitals';


import Password_Gen from './Password_Gen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

    <div className='flex justify-around'>
      <BMI />
      <Password_Gen/>
    </div>
    

  </React.StrictMode>
);

reportWebVitals();
