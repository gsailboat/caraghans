import React, { Component } from 'react';
import './css/BookEvent.css'

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
        This is only going to appear if I click a button that says i want to book an event. Its going to include a plugin to open table and instructions if they dont want to use it.
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
