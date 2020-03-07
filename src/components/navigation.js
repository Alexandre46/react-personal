// Router imports
import React from 'react';

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

const urlPreffix = 'react-personal';

  export default function Navigation() {
    return (
      <Router>
          <div class="nav-collapse collapsed">
            <ul class="navbar">
                <li class="col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li class="col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link">
                    <Link to="/blog" className="nav-link"> Blog 🚀 </Link>
                </li>
                <li class="col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link">
                    <Link to="/projects" className="nav-link">Projects</Link>
                </li>
                <li class="col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link">
                    <Link to="/skills" className="nav-link">Skills</Link>
                </li>
                <li class="col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link">
                    <Link to="/about-me" className="nav-link">About me </Link>
                </li>
                <li class="col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link">
                    <Link to="/contact" className="nav-link">Contact </Link>
                </li>
            </ul>
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/skills">
                <Skills />
            </Route>
            <Route path="/blog">
                <BlogPosts />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/about-me">
                <AboutMe />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
          </Switch>
        </div>  
      </Router>
    );
  }

  function Home() {
    return (
      <div class="mt-3">
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
      <Contact />
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