import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';

if (process.env.NODE_ENV === 'development') {
  // develop 환경에서만 사용
  const { worker } = require('mocks/worker');
  worker.start();
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
