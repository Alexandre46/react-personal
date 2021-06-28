// Router imports
import React, { Component } from 'react';
import {
  HashRouter,
    Route
} from 'react-router-dom';
import AboutMe from './AboutMe';
import Welcome from './welcome';
import MyProjects from './Projects';
import BlogPosts from './Blog';
import Contact from './contact';
import Resume from './Resume';
import { withTranslation } from 'react-i18next';

import { createBrowserHistory } from "history";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

  class Navigation extends Component {
    render(){
      
      return (
        <HashRouter history={history} basename={process.env.PUBLIC_URL}>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
              <Route path={process.env.PUBLIC_URL + '/blog'} component={Blog} /> 
              <Route path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
              <Route path={process.env.PUBLIC_URL + '/resume'} component={Resume} />
              <Route path={process.env.PUBLIC_URL + '/about-me'} component={About} />
              <Route path={process.env.PUBLIC_URL + '/contact'} component={ContactMe} />
        </HashRouter>
      );
    }
  }
  function Home() {
    return (
      <div className="col-12 mt-3">
        <Welcome/>
      </div>
    );
  }

  function About() {
    return (
      <AboutMe />
    );
  }

  function ContactMe() {
    return (
      <div className="col-12 mt-3">
        <Contact />
      </div>
    );
  }
  
  function Projects() {
    return (
      <MyProjects />
    );
  }

  function Blog() {
    return (
      <BlogPosts />
    );
  }

  export default withTranslation()(Navigation);
