import React, { Component } from 'react';
import '../assets/scss/index.scss';

export default class Switcher extends Component {
  state = {
    checked: localStorage.getItem('theme') === 'dark',
    theme: localStorage.getItem('theme'),
  };

  componentDidMount() {
    document
      .getElementsByTagName('HTML')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
  }

  toggleThemeChange = () => {
    const { checked } = this.state;
    if (checked === false) {
      localStorage.setItem('theme', 'dark');
      document
        .getElementsByTagName('HTML')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      this.setState({
        checked: true,
      });
    } else {
      localStorage.setItem('theme', 'light');
      document
        .getElementsByTagName('HTML')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      this.setState({
        checked: false,
      });
    }
  };

  render() {
    return (
      <div>
        <label className="switch">
          <input
            type="checkbox"
            defaultChecked={this.state.checked}
            onChange={() => this.toggleThemeChange()}
          />
          <span className="slider round" />
        </label>
      </div>
    );
  }
}
