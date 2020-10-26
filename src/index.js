import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import App from './App';
import '@a/styles/reset.css';
import '@a/styles/animate.css';


ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.querySelector("#root")
)