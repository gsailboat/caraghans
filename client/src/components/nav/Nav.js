import React, { Component } from 'react';
import Theme from '../colors'
import MenuIcon from '@material-ui/icons/Menu'
import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
    position: "fixed",
    height: '15vh'
  },
  space: {
    display: 'flex'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

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
        <MuiThemeProvider theme={Theme}>
          <AppBar className={styles.root}>
            <Toolbar className={styles.space}>
              <IconButton
                onClick={this.handleMenu}
                color='secondary'
                className={styles.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="headline"
                align="center"
                color="inherit"
                className={styles.grow}
              >
                {this.state.hello ? "Hello" : "Bye"}
              </Typography>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Nav);
