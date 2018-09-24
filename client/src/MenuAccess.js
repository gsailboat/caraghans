import React, { Component } from 'react';
import './css/MenuAccess.css'

class MenuAccess extends Component {

  // start playing around with the menuButtons.json file and figure out how to import it here

  // the server needs a function thats create menu with inputs of button which are the path of the pdfs, and pictures for the buttons. it aslo needs the name.

  // i need to figure out how to make a json file

  constructor(props) {
    super(props);

    this.state = {

      // i need to retrieve these props from a json file and save to a json file

      // would it be worthwile putting this into a database thats stored online like heroku or firebase

      type: "Lunch / Dinner",
      link: './images/menus/main-menu.pdf'
    }
  }
  render() {
    return (
        <button className="menuButton">
          <div className="backColor">
            {this.state.type}
          </div>
        </button>
    );
  }
}

export default MenuAccess;
