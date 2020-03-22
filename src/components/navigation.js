// Router imports
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';
import MyCarousel from './carousel';
import AboutMe from './AboutMe';
import Welcome from './welcome';
import MyProjects from './Projects';
import BlogPosts from './Blog';
import Contact from './contact';

import { withTranslation } from 'react-i18next';

  class Navigation extends Component {
    render(){
      const { t } = this.props;
      const NoMatchPage = () => {
        return (
          <div className="text-center pt-5">
            <h1> 404 - {t("notFound")}</h1>
            <a className="btn btn-lg btn-outline-danger" href="/"> {t("backHome")} </a>
          </div>
        );
      };
      return (
        <Router>
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/skills">
                <Skills />
            </Route>
            <Route exact path="/blog">
                <Blog />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/about-me">
                <AboutMe />
            </Route>
            <Route exact path="/contact">
                <ContactMe />
            </Route>
            <Route component={NoMatchPage} />
          </Switch>
        </Router>
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

  function Skills() {
    return (
      <MyCarousel />
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
