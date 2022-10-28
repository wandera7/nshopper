import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import store from "./store";

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
{/* <App tab="home" />); */}
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <Provider store={store}>
   <App />
  </Provider>)
