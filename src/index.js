import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyTable from './components/Table';
import Clock from './components/clock';
import MyCarousel from './components/headerCarrousel';

// Imports for Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(<MyCarousel />, document.getElementById('carousel'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<MyTable />, document.getElementById('top'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
