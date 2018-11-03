import React, { Component } from 'react'
import MenuAccess from './access/MenuAccess'
import './Menus.css'


class Menus extends Component {

  // figure out what pictures should be imported

  // igure out what to do with the pics. get more options

  // figure out how to loop items is the render

  // make a json file that groups all the pictures and buttons together

  state = {
    style1: 'menuContainer'
  }

    // var sectionStyle = {
    //   width: 100%,
    //   height: auto
    // }
    //
    // this.state = {
    //   selected: "Lunch/Dinner",
    //   pic: "./images/food/food.jpg"
    //   // or the pic that is
    //
    // }

// loop below for each button because i need every button to be listened to

  handleChildClick = (e) => {
    console.log("Click");
  }

  changeImage = () => {
    this.setState({
      style1: 'menuContainer2'
    })
  }

  createButtons = () => {
    const menus=[
      {
        id:"Lunch/Dinner",
        link:"./images/menus/main-menu.pdf",
        pic:"./pic/food.jpg"
      },
      {
        id:"Events",
        link:"./images/menus/main-menu.pdf",
        pic:"./images/food/food.jpg"
      },
      {
        id:"Brunch",
        link:"./images/menus/main-menu.pdf",
        pic:"./images/food/food.jpg"
      },
      {
        id:"Wine Bar",
        link:"./images/menus/main-menu.pdf",
        pic:"./images/food/food.jpg"
      },
      {
        id:"Happy Hour",
        link:"./images/menus/main-menu.pdf",
        pic:"./images/food/food.jpg"
      }
    ]
    let buttons = [];

    for(let i = 0; i < menus.length; i++) {
      buttons.push(<MenuAccess key={menus[i].id} id={menus[i].id}/>)
    }
    return buttons;
  }

  render() {

    // save this as a json file

    // var sectionStyle = {
    //   backgroundImage: `url(${Background})`
    // }

    return (
      <div
        id="menuContainer"
        // id={this.state.style1} onMouseOver={this.changeImage}
        >

        <br/>
        MENUS
        <br/>
        <br/>
        <div id="menuButtonAr">
          { this.createButtons() }
        </div>
        <br/>
      </div>
    );
  }
}


export default Menus;
