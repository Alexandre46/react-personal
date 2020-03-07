import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock';
import Logo from './components/Logo';
import Switcher from './components/Switcher';
import './assets/scss/index.scss';
import Navigation from './components/navigation';
import * as serviceWorker from "./serviceWorker";
// Imports for Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render (<Switcher /> , document.getElementById('theme-switcher'));
ReactDOM.render(<Logo />, document.getElementById('logo'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(
    <Navigation />,
    document.getElementById('navigation')
 );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();