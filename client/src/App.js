import React, { Component } from 'react';
import './css/App.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import Nav from './Nav'

class App extends Component {
  // make smooth and cool transitions between these.

// figure out how to add a thumbnail for the tab
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
