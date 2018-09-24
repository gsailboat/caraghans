import React, { Component } from 'react';
import Merchandise from './Merchandise';
import './css/Shop.css'

class Shop extends Component {
  render() {
    return (
      <div id="shopContainer">
        <br/>
        SHOP
        <br/>
        <br/>
        <div id="mercContainer">
          <Merchandise />

          <div className="merc">
            <div>
              Hoodie
            </div>
            <img
              className="mercPic" src={require('./images/merc/carrahoodie.jpg')}
              alt="hoodie"
            />
            <div>
              $20
            </div>
          </div>

          <div className="merc">
            <div>
              See other merc pics for complete list
            </div>
            <img className="mercPic" src={require('./images/merc/carramug.jpg')} alt="pic here" id="filler" />
            <div>
              $20
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Shop;
