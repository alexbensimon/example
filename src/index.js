import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import registerServiceWorker from './config/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
