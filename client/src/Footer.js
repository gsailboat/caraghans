import React, { Component } from 'react';
import './css/Footer.css'

class Footer extends Component {

// get a picture of the red curtains at Carraghers for the background of the footer

  render() {
    return (
      <footer>
        <div id="footerContainer">
          <br/>
          OUR PARTNERS
          <br/><br/>
          <div id="partners">
            <img
              className="partnerPic"
              src={require('./images/partners/kopiteNEWlogo50.png')}
              alt="Kopite logo"
            />
            <img
              className="partnerPic"
              src={require('./images/partners/23jamielogo.png')}
              alt="Jamie Carragher logo"
            />
            <img
              className="partnerPic"
              src={require('./images/partners/ucf1.png')}
              alt="UCF logo"
            />
            <img
              className="partnerPic"
              src={require('./images/partners/iu.png')} //this needs to be part of the above
              alt="Indiana University logo"
            />
          </div>
        </div>
        <br/>
        <div>
          Website created by SelboBrothersDesign
          <br/><br/>
          &copy; 2018 CARRAGHER'S PUB & RESTAURANT. ALL RIGHTS RESERVED.
        </div>
        <br/>
      </footer>
    );
  }
}

export default Footer;
