import React, { Component, useState, CustomToggle, CustomMenu } from 'react';
import {Dropdown, FormControl } from 'react-bootstrap';
import i18n from './i18n';
import { withTranslation } from 'react-i18next';

class languageSwitcher extends Component {
  state = {
    value: "en"
  };
  handleChange = event => {
    console.log("selected val is ", event);
    let newlang = event;
    this.setState(prevState => ({ value: newlang }));
    console.log("state value is", newlang);
    i18n.changeLanguage(newlang);
  };
  
  // The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            child =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

  render(){
    const { t } = this.props;
    return (
      <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" drop="left" variant="transparent" className="button-transparent border-0" >
        <img src="https://res.cloudinary.com/cinforme/image/upload/c_scale,w_30/v1583196206/BLOG/PngItem_311914.png" alt="lang selector"/>
      </Dropdown.Toggle>
  
      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item onSelect={this.handleChange} eventKey="en" value="en">
          <img src="https://res.cloudinary.com/cinforme/image/upload/v1582388051/BLOG/en.png" alt="English flag"/>  {t('en')} 
        </Dropdown.Item>
        <Dropdown.Item onSelect={this.handleChange} eventKey="fr" value="fr">
          <img src="https://res.cloudinary.com/cinforme/image/upload/v1582388051/BLOG/fr.png" alt="French flag"/> {t('fr')} 
        </Dropdown.Item>
        <Dropdown.Item onSelect={this.handleChange} eventKey="pt" value="pt">
          <img src="https://res.cloudinary.com/cinforme/image/upload/v1582388051/BLOG/pt.png" alt="Portuguese flag"/> {t('pt')} 
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
  }
}

export default withTranslation()(languageSwitcher);