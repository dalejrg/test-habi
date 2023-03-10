import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import ReactDOM from 'react-dom/client';
import store from './Store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);