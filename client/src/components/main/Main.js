import React, { Component } from 'react';
import Menu from './menus/Menus'
import ContactUs from './contact/ContactUs'
import Events from './events/Events'
import Shop from './shop/Shop'

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
