import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { DataStore } from 'aws-amplify';

import Amplify from 'aws-amplify';
import { awsExports } from 'src/@app/libs/getAwsExports';
// import { DataStore } from '@aws-amplify/datastore';

Amplify.configure(awsExports);
// Amplify.Logger.LOG_LEVEL = 'DEBUG';
// DataStore.start();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
