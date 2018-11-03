import React, { Component } from 'react';
import './MenuAccess.css'

class MenuAccess extends Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(this.props.id);
    console.log(this.props.pic);
    // send the picture to the higher class Menu.js
  }



  render() {
    return (
        <button
          className="menuButton"
          onClick={this.handleClick}
        >
          {/* <img
            className="pic"
            src={require(`${this.props.pic}`)}
            alt={this.props.id}
          /> */}
          {/* <div className="backColor"> */}
            {this.props.id}
          {/* </div> */}
        </button>
    );
  }
}

export default MenuAccess;
