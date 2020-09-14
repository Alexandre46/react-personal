import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Navbar, Nav, NavLink } from 'react-bootstrap';

class Header extends Component {
    render(){
      const { t } = this.props;
      return (
        <Navbar collapseOnSelect expand="lg" variant="light" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto text-center">
                    <NavLink href={process.env.PUBLIC_URL + '/#'} className="nav-link menu-link">{t("menuHome")} </NavLink>
                    <NavLink href={process.env.PUBLIC_URL + '/#/blog'} className="nav-link menu-link"> {t("menuBlog")} </NavLink>
                    <NavLink href={process.env.PUBLIC_URL + '/#/projects'} className="nav-link menu-link">{t("menuProjects")} </NavLink>
                    <NavLink href={process.env.PUBLIC_URL + '/#/resume'} className="nav-link menu-link">{t("menuResume")} </NavLink>
                    <NavLink href={process.env.PUBLIC_URL + '/#/about-me'} className="nav-link menu-link">{t("menuAboutMe")} </NavLink>
                    <NavLink href={process.env.PUBLIC_URL + '/#/contact'} className="nav-link menu-link">{t("menuContact")} </NavLink>
                </Nav>
            </Navbar.Collapse> 
        </Navbar>
        );
    }
  }

  export default withTranslation()(Header);