import React, { Component } from 'react';
import '../css/HeaderContainer.css';

import CharName from './header_container/CharName';
import CharRace from './header_container/CharRace';
import CharBackground from './header_container/CharBackground';

class HeaderContainer extends Component {
  render(){
    return(
      <div className="header-container">
        <CharName value="Tracx Lury"/>
        <CharRace value="Dragonborn"/>
        <CharBackground value="Far Traveler"/>
      </div>
    );
  }
}

export default HeaderContainer;
