import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import LanguageSwitcher from "./LanguageSwitcher";
import Switcher from "./Switcher";

const styles = {
  headerRow: {
    justifyContent: "space-between",
  },
};

class Header extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="text-center d-block d-md-flex" style={styles.headerRow}>
        <NavLink
          href={process.env.PUBLIC_URL + "/#/blog"}
          className="nav-link menu-link"
        >
          {" "}
          {t("menuBlog")}{" "}
        </NavLink>
        <NavLink
          href={process.env.PUBLIC_URL + "/#/projects"}
          className="nav-link menu-link"
        >
          {t("menuProjects")}{" "}
        </NavLink>
        <NavLink
          href={process.env.PUBLIC_URL + "/#/resume"}
          className="nav-link menu-link"
        >
          {t("menuResume")}{" "}
        </NavLink>
        <NavLink
          href={process.env.PUBLIC_URL + "/#/cv"}
          className="nav-link menu-link"
        >
          {t("menuCV")}{" "}
        </NavLink>
        <NavLink
          href={process.env.PUBLIC_URL + "/#/about-me"}
          className="nav-link menu-link"
        >
          {t("menuAboutMe")}{" "}
        </NavLink>
        <NavLink
          href={process.env.PUBLIC_URL + "/#/contact"}
          className="nav-link menu-link"
        >
          {t("menuContact")}{" "}
        </NavLink>
        <LanguageSwitcher />
        <Switcher />
      </div>
    );
  }
}

export default withTranslation()(Header);
