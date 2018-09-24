import React, { Component } from 'react';
import PlannedEvents from './PlannedEvents';
import BookEvent from './BookEvent.js';
import './css/Events.css'

class Events extends Component {
// make BookEvent toggle open and closed

// link is toggle to the display

  constructor(props) {
    super(props);

    this.state = {
      isToggle:false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(this.props);
    this.setState({
      isToggle: !this.state.isToggle
    })
  }

  render() {
    return (
      <div id="eventsContainer">
        <br/>
        EVENTS
        <br/><br/>
        <PlannedEvents />
        <button
          onClick={this.handleClick}
        >
          Book an Event
        </button>
        <br/><br/>
        <BookEvent
          hidden={this.state.isToggle}
          style={{display: this.state.isToggle ? 'flex': 'none'}}/>
      </div>
    );
  }
}

export default Events;
