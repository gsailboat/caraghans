import React, { Component } from 'react'
import MenuAccess from './MenuAccess'
import './css/Menu.css'

class Menu extends Component {
  // menu needs a theme. what should it be? white like a paper menu?
  // look up how to animations. ask greg how to get animations

  //make buttons resond when theyre clicked.

  // make a json file that groups all the pictures and buttons together

  render() {
    return (
      <div id="menuContainer">
        <br/>
        MENUS
        <br/>
        <br/>
        <div id="menuButtonAr">
          <MenuAccess className="menuButton"/>
          <button className="menuButton">
            Event Menu
          </button>
          <button className="menuButton">
            Brunch
          </button>
          <button>
            Wine Bar
          </button>
          <button>
            Happy hour
          </button>
        </div>
        <br/>
      </div>
    );
  }
}

export default Menu;
