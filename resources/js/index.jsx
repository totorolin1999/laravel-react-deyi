import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style.css';

if (document.getElementById('lampsApp')) {
    ReactDOM.render(<App />, document.getElementById('lampsApp'));
}
