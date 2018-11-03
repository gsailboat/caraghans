import React, { Component } from 'react';
import './App.css';
import Header from './header/Header.js';
import Main from './main/Main.js'
import Footer from './footer/Footer.js'
import Nav from './nav/Nav.js'

class App extends Component {
  // make smooth and cool transitions between these.

// figure out how to add a thumbnail for the tab

// get pictures

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
