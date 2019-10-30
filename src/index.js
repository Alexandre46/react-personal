import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyTable from './components/Table';
import Clock from './components/clock';
import MyCarousel from './components/headerCarrousel';

// Imports for Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<MyCarousel />, document.getElementById('carousel'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<MyTable />, document.getElementById('top'));

