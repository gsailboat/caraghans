import React, { Component } from 'react';
import PlannedEvents from './planned/PlannedEvents';
import BookEvent from './book/BookEvent.js';
import Collapse from '@material-ui/core/Collapse';
import './Events.css'

class Events extends Component {
// make BookEvent toggle open and closed

// link is toggle to the display

  constructor(props) {
    super(props);

    this.state = {

    }

    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    return (
      <div id="eventsContainer">
        <br/>
        EVENTS
        <br/><br/>
        <PlannedEvents />
        <button
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="Show more"
        >
          Book an Event
        </button>
        <br/><br/>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <BookEvent/>
          <br/>
        </Collapse>
      </div>
    );
  }
}

export default Events;
