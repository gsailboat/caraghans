import React, { Component } from 'react';
import './ContactUs.css'
import Collapse from '@material-ui/core/Collapse';

class ContactUs extends Component {

  // need to figure out how I'd want to design this. Ask rebe

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      count: 0
    }
    // i understand bnd statements arent required anymore

    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateSubject = this.updateSubject.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateName(e) {
    const value = e.target.value;
    this.setState({
      name: value
    })
  }

  updateEmail(e) {
    const value = e.target.value;
    this.setState({
      email: value
    })
  }

  updateSubject(e) {
    const value = e.target.value;
    this.setState({
      subject: value
    })
  }

  updateMessage(e) {
    const value = e.target.value;
    this.setState({
      message: value
    })
  }

  handleSubmit(e) {
    this.setState(state => ({
      expanded: true,
      count: state.count+1
    }));
    console.log(this);
  }

  render() {
    return (
      <div id="contactContainer">
        <div>
          <br/>
          CONTACT US
          <br/><br/>
        </div>

        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.updateName}
        />
        <br/>
        <input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.updateEmail}
        />
        <br/>
        <input
          type="text"
          placeholder="Subject"
          value={this.state.subject}
          onChange={this.updateSubject}
        />
        <br/>
        <textarea
          name="message"
          id="message"
          cols="40"
          rows="8"
          placeholder="Enter your message here"
          value={this.state.message}
          onChange={this.updateMessage}
        />
        <br/>
        <button onClick={this.handleSubmit} id="submit">
          Send
        </button>
        <br/><br/>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          You have not sent {this.state.count} Message(s) because the programmers need to link this to an email
          <br/><br/>
        </Collapse>
      </div>
    );
  }
}

export default ContactUs;
