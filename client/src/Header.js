import React, { Component } from 'react';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={require('./images/logo.jpeg')} alt="Carragher's" id="logo"/>
        <div id="headerText">
          <div id="description">
            PUB RESTAURANT & SEASONAL ROOFTOP
            DEDICATED TO LIVERPOOL’S JAMIE CARRAGHER.
          </div>
          <div id="pAddress">
            228 W 39TH ST, NEW YORK, NY 10018 <br/>
            (BTW 7TH & 8TH AVENUE) <br/>
            (646) 370-1545 <br/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
