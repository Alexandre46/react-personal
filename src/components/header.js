import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Navbar, Nav, NavLink } from 'react-bootstrap';

class Header extends Component {
    render(){
      const { t } = this.props;
      return (
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="row">
                    <Nav className="col-12">
                        <li className="col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0">
                            <NavLink href="/" className="nav-link menu-link">{t("menuHome")} </NavLink>
                        </li>
                        <li className="col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0">
                            <NavLink href="/blog" className="nav-link menu-link"> {t("menuBlog")} </NavLink>
                        </li>
                        <li className="col-12 col-lg-3 btn btn-outline-secondary nav-item nav-link border-0">
                            <NavLink href="/projects" className="nav-link menu-link">{t("menuProjects")} </NavLink>
                        </li>
                        <li className="col-12 col-lg-3 btn btn-outline-secondary nav-item nav-link border-0">
                            <NavLink href="/about-me" className="nav-link menu-link">{t("menuAboutMe")} </NavLink>
                        </li>
                        <li className="col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0">
                            <NavLink href="/contact" className="nav-link menu-link">{t("menuContact")} </NavLink>
                        </li>
                    </Nav>
                </Navbar.Collapse> 
            </Navbar>
        );
    }
  }

  export default withTranslation()(Header);