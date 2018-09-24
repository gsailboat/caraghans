import React, { Component } from 'react';

class Merchandise extends Component {
  constructor (props) {
    super(props);

    this.state = {
      merc: {
        type: "Beanie",
        pic: './images/merc/beanies.jpg',
        price: 10
      }
    }
  }

  render() {
    return (
      <div className="merc">
        <div>
          {this.state.merc.type}
        </div>
        <img
          className="mercPic"
          src={require('./images/merc/beanies.jpg')} //this needs to be part of the above
          alt="beanie"
        />
        <div>
          ${this.state.merc.price}
        </div>
      </div>
    );
  }
}

export default Merchandise;
