import React, { Component } from 'react';

class Merchandise extends Component {

//have this behave like the menu portion

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
          {this.props.id}
        </div>
        {/* <img
          className="mercPic"
          src={require(`${this.props.pic}`)} //this needs to be part of the above
          alt={this.props.id}
        /> */}
        <div>
          ${this.props.price}
        </div>
      </div>
    );
  }
}

export default Merchandise;
