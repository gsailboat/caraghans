import React, { Component } from 'react';
import Menu from './Menus'
import ContactUs from './ContactUs'
import Events from './Events'
import Shop from './Shop'

class Main extends Component {
  render() {
    return (
      <main>
        <Menu />
        <Events />
        <Shop />
        <ContactUs />
      </main>
    );
  }
}

export default Main;
