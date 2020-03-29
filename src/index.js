import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Switcher from './components/Switcher';
import LanguageSwitcher from './components/LanguageSwitcher';
import Navigation from './components/navigation';
import Header from './components/header';
import * as serviceWorker from "./components/serviceWorker";
// Imports for Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/index.scss';
// imports for i18n
import i18n from "./components/i18n";
import { I18nextProvider } from 'react-i18next';

ReactDOM.render (
<I18nextProvider i18n={i18n}>
<Switcher />
</I18nextProvider>,
 document.getElementById('theme-switcher'));

ReactDOM.render (
 <I18nextProvider i18n={i18n}>
<LanguageSwitcher />
</I18nextProvider>,
document.getElementById('language-switcher') );

ReactDOM.render(<Logo />, document.getElementById('logo'));

ReactDOM.render(
<I18nextProvider i18n={i18n}>
<Navigation />
</I18nextProvider>,document.getElementById('content'));

ReactDOM.render(
<I18nextProvider i18n={i18n}>
<Header />
</I18nextProvider>,document.getElementById('header'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();