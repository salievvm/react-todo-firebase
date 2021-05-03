import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';

import logo_dark from './catsby-dark.gif'
import logo from './catsby-light.gif'

export { logo, logo_dark }

ReactDOM.render(
    <Router basename={window.basepath}>
        <App />
    </Router>,
    document.getElementById('root')
);