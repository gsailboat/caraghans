import React, { Component } from 'react';
import Merchandise from './merch/Merchandise';
import './Shop.css'

class Shop extends Component {

  // wrap w style have merc scroll through
  // make the inputs similar MENUS
  // read through google transitions
  // i need to work on the amazon plug in.
  // can we get money for directing traffic or how do we set up the infrastructure with amazon

  createButtons = () => {
    const merc = [
      {
        type: "Beanie",
        pic: './merch/pics/beanies.jpg',
        price: 10
      },
      {
        type: "Hoodie",
        pic: './merch/pics/carrahoodie.jpg',
        price: 75
      },
      {
        type: "Mug",
        pic: './merch/pics/carramug.jpg',
        price: 15
      },
      {
        type: "Scarf",
        pic: './merch/pics/scarf1.jpg',
        price: 30
      },
      {
        type: "Shirt",
        pic: './merch/pics/recordshirtred.jpg',
        price: 25
      },
      {
        type: "Pin",
        pic: './merch/pics/carrashirtpin.jpg',
        price: 5
      }
    ];
    let buttons = [];

    for(let i = 0; i < merc.length; i++) {
      buttons.push(<Merchandise key={merc[i].type} id={merc[i].type} pic={merc[i].pic} price={merc[i].price}/>)
    }
    return buttons;
  }

  render() {

    return (
      <div id="shopContainer">
        <br/>
        SHOP
        <br/><br/>
          figure out what to put here
        <br/><br/>
        <div id="mercContainer">
          { this.createButtons() }
        </div>
      </div>
    );
  }
}

export default Shop;
