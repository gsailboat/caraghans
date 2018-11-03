import React, { Component } from 'react';
import './BookEvent.css'

class BookEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: false
    }
  }

  render() {
    return (
      <div id="BEContainer">
        need to include a plugin to open table

        the link can be accessed at:<br/>

        https://platform.opentable.com/documentation/
        <br/><br/>
        Large parties and events, please call 646-370-1545 <br/>
        Parties of 11 or more, please email us at events@carraghersnyc.com
        Please include: <br/>
        Create an email input or send them to the contact us with a radio button to select sending to events@carraghersnyc.com
        First and last name. <br/>
        Contact information. <br/>
        Date, time and party size.
      </div>
    );
  }
}

export default BookEvent;
