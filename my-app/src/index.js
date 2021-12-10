import React from 'react';
import ReactDOM from 'react-dom';
import App from './Apps/App';
import CountApp from './Apps/CountApp';

import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<div>
  <App />
  <CountApp />
  
</div>, document.getElementById('root'));