import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Navbar, Nav, NavLink, Container, Col } from 'react-bootstrap';
import LanguageSwitcher from './LanguageSwitcher';
import Switcher from './Switcher';
import Logo from './Logo';

const styles = {
  headerRow: {
    justifyContent: 'space-between'
  }
};

class Header extends Component {
  render() {
    const { t } = this.props;
    return (
      <Navbar sticky="top" expand="lg">
        <Container>
          <Col xs={12} lg={5}>
            <Navbar.Brand href={`${process.env.PUBLIC_URL}`}>
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col>
          <Col xs={12} lg={7}>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink href={`${process.env.PUBLIC_URL}/#/blog`} className="nav-link menu-link">
                  {t('menuBlog')}
                </NavLink>
                <NavLink
                  href={`${process.env.PUBLIC_URL}/#/projects`}
                  className="nav-link menu-link">
                  {t('menuProjects')}
                </NavLink>
                <NavLink href={`${process.env.PUBLIC_URL}/#/resume`} className="nav-link menu-link">
                  {t('menuResume')}
                </NavLink>
                <NavLink href={`${process.env.PUBLIC_URL}/#/cv`} className="nav-link menu-link">
                  {t('menuCV')}
                </NavLink>
                <NavLink
                  href={`${process.env.PUBLIC_URL}/#/about-me`}
                  className="nav-link menu-link">
                  {t('menuAboutMe')}{' '}
                </NavLink>
                <NavLink
                  href={`${process.env.PUBLIC_URL}/#/contact`}
                  className="nav-link menu-link">
                  {t('menuContact')}{' '}
                </NavLink>
                <LanguageSwitcher />
                <Switcher />
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
    );
  }
}

export default withTranslation()(Header);
