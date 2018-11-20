import React, { Component } from 'react';
import './Nav.css';
import MenuIcon from '@material-ui/icons/Menu'
import { AppBar, Typography, Toolbar, IconButton} from '@material-ui/core';



class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hello: true
    }
  }

  handleMenu = () => {
    this.setState(prevState => ({
      hello: !prevState.hello
    }));
  }

  render() {
    return (
        <AppBar
          position="sticky"
          color="primary"
          className="navbar"
        >
          <Toolbar>
            <IconButton
              onClick={this.handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography>{this.state.hello ? "Hello" : "Bye"}</Typography>
          </Toolbar>
        </AppBar>
    );
  }
}

export default Nav;
