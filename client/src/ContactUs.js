import React, { Component } from 'react';
import './css/ContactUs.css'

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: ''
    }

    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    const value = e.target.value;
    this.setState({
      name: value
    })
  }

  render() {
    return (
      <form id="contactContainer">
        <div>
          <br/>
          CONTACT US
          <br/><br/>
        </div>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.updateInput}
        ></input>
        <br/>
        <input
          type="text"
          placeholder="Fix updateInput"
          value={this.state.email}
          onChange={this.updateInput}
        ></input>
        <br/>
        <input
          type="text"
          placeholder="Fix updateInput"
          value={this.state.supject}
          onChange={this.updateInput}
        ></input>
        <br/>
        <textarea name="message" id="message" cols="40" rows="8" placeholder="this and the submit button dont work yet"></textarea>
        <br/>
        <input type="submit" value="Send Message"></input>
        <br/><br/>
      </form>
    );
  }
}

export default ContactUs;
