import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import App from './containers/App';
import './containers/App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
    
  </React.StrictMode>
);

