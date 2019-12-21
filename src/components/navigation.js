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
          <div>
            <ul class="list-group list-group-horizontal">
                <li class="list-group-item">
                    <Link to="/">Home</Link>
                </li>
                <li class="list-group-item">
                    <Link to="/blog"> 🚀 Blog</Link>
                </li>
                <li class="list-group-item">
                    <Link to="/projects">Projects</Link>
                </li>
                <li class="list-group-item">
                    <Link to="/skills">Skills</Link>
                </li>
                <li class="list-group-item">
                    <Link to="/about-me">About me </Link>
                </li>
                <li class="list-group-item">
                    <Link to="/contact">Contact </Link>
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