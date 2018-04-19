import React, { Component } from 'react';
import './Navbar.css';
import Facebook from "../Facebook";
import loginLogo from './loginLogo.png';


class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      loginClicked: false
    };

    this.showLogin = this.showLogin.bind(this);

  }
  showLogin = () => {
    this.setState({
      loginClicked: !this.state.loginClicked
    });
  }

  render() {
    return (
      <div className="navbar">

        {/* Logo click - displays Facebook login btn by first setting state to loginClicked: true */}
        <img src={loginLogo} alt="login" id="icon" onClick={this.showLogin} />

        {/* (Conditional Rendering of the Facebook component) - if loginClicked: true, display component */}
        <div id="fbLogin">
        {this.state.loginClicked ? <Facebook /> : null}
        </div>

        {/* Navbar links  */}
        <div className="menu">
          <ul className="menu-items">
            <li><a href="https://www.google.com">Home</a></li>
            <li><a href="https://www.google.com">About</a></li>
            <li><a href="https://www.google.com">Upgrade to Premium</a></li>
          </ul>
        </div>


        <div className="title"> <div>Feeders</div>
          <div id="subtitle">Your go-to social media dashboard</div>
        </div>
      </div>
    );
  }
}

export default Navbar;