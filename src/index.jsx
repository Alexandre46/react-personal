import React, { useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import ReactGA from 'react-ga';
import Navigation from './components/navigation';
import Header from './components/header';
import * as serviceWorker from './components/serviceWorker';
// Imports for Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import './assets/scss/index.scss';
// imports for i18n
import i18n from './components/i18n';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// Immport React Google Anaylitics
const trackingId = 'UA-159999549-1';
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

//Google reCaptcha v3
const siteKey = process.env.REACT_APP_SITE_KEY;

const contentContainer = document.getElementById('content');
const root = createRoot(contentContainer);
root.render(
  <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
    <Navigation />
  </GoogleReCaptchaProvider>
);

const headerContainer = document.getElementById('header');
const rootHeader = createRoot(headerContainer);
rootHeader.render(
  <I18nextProvider i18n={i18n}>
    <Header />
  </I18nextProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
