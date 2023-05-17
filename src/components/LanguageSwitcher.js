import React, { Component, useState } from 'react';
import { Dropdown, FormControl } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import i18n from './i18n';

const handleChange = (event) => {
  console.log('event', event);
  const newlang = event;
  i18n.changeLanguage(newlang);
};

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}>
    {children}
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');
    return (
      <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) => !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);
class languageSwitcher extends Component {
  state = {
    value: 'en'
  };

  render() {
    const { i18n, t } = this.props;
    return (
      <Dropdown>
        <Dropdown.Toggle
          as={CustomToggle}
          id="dropdown-custom-components"
          drop="left"
          variant="transparent"
          className="button-transparent border-0">
          <img
            src="https://res.cloudinary.com/cinforme/image/upload/c_scale,w_30/v1583196206/BLOG/PngItem_311914.png"
            alt="lang selector"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu}>
          <Dropdown.Item
            onClick={() => handleChange('en')}
            eventKey="en"
            value="en"
            active={i18n.language === 'en'}>
            <img
              src="https://res.cloudinary.com/cinforme/image/upload/v1582388051/BLOG/en.png"
              alt="English flag"
            />{' '}
            {t('en')}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleChange('fr')}
            eventKey="fr"
            value="fr"
            active={i18n.language === 'fr'}>
            <img
              src="https://res.cloudinary.com/cinforme/image/upload/v1582388051/BLOG/fr.png"
              alt="French flag"
            />{' '}
            {t('fr')}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleChange('pt')}
            eventKey="pt"
            value="pt"
            active={i18n.language === 'pt'}>
            <img
              src="https://res.cloudinary.com/cinforme/image/upload/v1582388051/BLOG/pt.png"
              alt="Portuguese flag"
            />{' '}
            {t('pt')}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default withTranslation()(languageSwitcher);
