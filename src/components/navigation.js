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
import { Navbar, Nav, Button } from 'react-bootstrap';



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
          <Navbar collapseOnSelect expand="lg" variant="light">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="row">
              <Nav className="col-12">
                  <li className="col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0">
                      <Link to="/" className="nav-link menu-link">{t("menuHome")} <span role="img" aria-label="Home icon" >🏡</span></Link>
                  </li>
                  <li className="col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0">
                      <Link to="/blog" className="nav-link menu-link"> {t("menuBlog")} <span role="img" aria-label="Rocket icon">🚀</span> </Link>
                  </li>
                  <li className="col-12 col-lg-3 btn btn-outline-secondary nav-item nav-link border-0">
                      <Link to="/projects" className="nav-link menu-link">{t("menuProjects")} <span role="img" aria-label="Book icon">📓</span> </Link>
                  </li>
                  <li className="col-12 col-lg-3 btn btn-outline-secondary nav-item nav-link border-0">
                      <Link to="/about-me" className="nav-link menu-link">{t("menuAboutMe")} <span role="img" aria-label="Person icon">👨🏼‍💻</span></Link>
                  </li>
                  <li className="col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0">
                      <Link to="/contact" className="nav-link menu-link">{t("menuContact")} <span role="img" aria-label="Phone icon">📱</span></Link>
                  </li>
              </Nav>
            </Navbar.Collapse> 
          </Navbar>
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