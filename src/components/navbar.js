import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class NavBar extends Component {

  render() {
    return (
      <div className="navbar">
          <img className="App-logo" src="/dude_headphones_icon.png" alt="logo" height="52" width="52" />
          <ul className="list">
              <li className="item" ><Link to="/home" className="hyper" id="active" href="">Home </Link></li>
              <li className="item"><Link to="/playlist" className="hyper" href="">Playlist </Link></li>
              <li className="item"><Link to="/resume-page" className="hyper" href="">Log Out</Link></li>
              <li className="item"><Link to="/search" className="hyper" href="">Search</Link></li>

          </ul>
      </div>
    );
  }

}
export default NavBar;
