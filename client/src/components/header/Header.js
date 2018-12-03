import React, { Component } from 'react';
import Theme from '../colors';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { Typography, CssBaseline, Card, CardMedia,
  CardActions, Collapse, CardContent, IconButton } from '@material-ui/core';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';
// import './pics/logo.jpeg'
import './Header.css';

// Theme.palette.type = "light";

const styles = theme => ({
  // heroContent: {
  //   width: "60%",
  //   margin: '0 auto'
  // }
  card: {
    // paddingTop: "18vh",
    // height: 400,
    //margin: "auto",
    backgroundColor: Theme.palette.secondary.main
  },
  content: {
    width: "55vw",
    margin: "0.4%"
  },
  media: {
    height: "15vh",
    width: 364,
    margin: "auto",
    paddingTop: "3vh"
    // width: "18vw",
    // align: "center"
  }
});

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
        expanded: false,
        more: "expand_more"
    }
}

handleExpand = () => {
  this.setState(prevState => ({
      expanded: !prevState.expanded,
      more: prevState.more === "expand_more" ? "expand_less" : "expand_more"
  }));
}
  render() {
    const {classes} = this.props
    return (
      <React.Fragment>
        <CssBaseline />
          <MuiThemeProvider theme={Theme}>
          {/* <header className="Header" color="primary">
            <img src={require('./pics/logo.jpeg')} alt="logo" id="logo"/>
            <div id="headerText">
              <div id="description">
                PUB RESTAURANT & SEASONAL ROOFTOP
                DEDICATED TO LIVERPOOL’S JAMIE CARRAGHER.
              </div>
              <div id="pAddress">
                228 W 39TH ST, NEW YORK, NY 10018 <br/>
                (BTW 7TH & 8TH AVENUE) <br/>
                (646) 370-1545 <br/>
              </div>
            </div>
          </header> */}
            {/* <div className="opener">
              <div className="content">
                <img src={require('./pics/logo.jpeg')} alt="logo" className="logo"/>
                <Typography component="h1" variant="h2" color="inherit" align="center" gutterBottom>
                  PUB RESTAURANT & SEASONAL ROOFTOP
                  DEDICATED TO LIVERPOOL’S JAMIE CARRAGHER.
                </Typography>
                <Typography variant="h6" align="center" paragraph color="white">
                  228 W 39TH ST, NEW YORK, NY 10018 <br/>
                  (BTW 7TH & 8TH AVENUE) <br/>
                  (646) 370-1545 <br/>
                </Typography>
                </div>
              </div> */}
              <div className="opener">
                <Card className={classes.card}>
                  <CardMedia
                    component="img"
                    alt="Carragher's Logo"
                    className={classes.media}
                    image={require('./pics/logo.jpeg')}
                    title="Carragher's Logo"
                  />
                  <CardContent className={classes.content}>
                    <Typography component="h1" variant="h5" color="inherit" align="center" gutterBottom>
                      PUB RESTAURANT & SEASONAL ROOFTOP
                      DEDICATED TO LIVERPOOL’S JAMIE CARRAGHER.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton onClick={this.handleExpand}>
                        <MaterialIcon icon={this.state.more}/>
                    </IconButton>
                    <Typography component="h4" variant="headline" color="inherit" align="center" paragraph>
                      Addess Information
                    </Typography>
                  </CardActions>
                  <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent className={classes.content}>
                      <Typography variant="h6" align="center" paragraph color="inherit">
                        228 W 39TH ST, NEW YORK, NY 10018 <br/>
                        (BTW 7TH & 8TH AVENUE) <br/>
                        (646) 370-1545 <br/>
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>
          </MuiThemeProvider>
        </React.Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
