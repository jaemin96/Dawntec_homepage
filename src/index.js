import React from 'react';
import { hydrate, render } from "react-dom";

import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from 'react-router-dom';

// IE9의 경우 
import 'react-app-polyfill/ie9'; 
//IE11의 경우
import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";



const rootElement = document.getElementById('root');


if(rootElement.hasChildNodes()){
  hydrate(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
  );
}
else{
  render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
  );
}

/*
ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <App />
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

