import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="Header" >
        <div className="row column">
        <center>
            <a href="/Home"><h1>{this.props.name} </h1></a>
          </center>
        </div>
      </div>
    );
  }
}

export default Header;
