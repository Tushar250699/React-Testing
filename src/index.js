import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import OnchangeTest from './OnchangeTest';
import OnclickTest from './OnclickTest';
import SnapShot from './SnapShot';
import FunComTest from './FunComTest';
import GetByRoll from './GetByRoll';
import GetByLabelText from './GetByLabelText';
import GetByPlaceHolder from './GetByPlaceHolder';
import GetById from './GetById';
import GetByDisplayValue from './GetByDisplayValue';
import FindByText from './FindByText';
import ClickEvent from './ClickEvent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <OnchangeTest/> */}
    {/* <OnclickTest/> */}
    {/* <SnapShot/> */}
    {/* <FunComTest/> */}
    {/* <GetByRoll/> */}
    {/* <GetByLabelText/> */}
    {/* <GetByPlaceHolder /> */}
    {/* <GetById/> */}
    {/* <GetByDisplayValue/> */}
    {/* <FindByText/> */}
    <ClickEvent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
