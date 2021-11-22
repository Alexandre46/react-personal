import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Navbar, Nav, NavLink } from 'react-bootstrap';

class Header extends Component {
    render(){
      const { t } = this.props;
      return (
        <div className="mr-auto text-center d-block d-md-flex">
            <NavLink href={process.env.PUBLIC_URL + '/#'} className="nav-link menu-link">{t("menuHome")} </NavLink>
            <NavLink href={process.env.PUBLIC_URL + '/#/blog'} className="nav-link menu-link"> {t("menuBlog")} </NavLink>
            <NavLink href={process.env.PUBLIC_URL + '/#/projects'} className="nav-link menu-link">{t("menuProjects")} </NavLink>
            <NavLink href={process.env.PUBLIC_URL + '/#/resume'} className="nav-link menu-link">{t("menuResume")} </NavLink>
            <NavLink href={process.env.PUBLIC_URL + '/#/cv'} className="nav-link menu-link">{t("menuCV")} </NavLink>
            <NavLink href={process.env.PUBLIC_URL + '/#/about-me'} className="nav-link menu-link">{t("menuAboutMe")} </NavLink>
            <NavLink href={process.env.PUBLIC_URL + '/#/contact'} className="nav-link menu-link">{t("menuContact")} </NavLink>
        </div>
        );
    }
  }

  export default withTranslation()(Header);