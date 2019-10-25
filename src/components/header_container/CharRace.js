import React, { Component } from 'react';

class CharRace extends Component {
  render(){
    return(
      <div className="char-race">
        {this.props.value}
      </div>
    );
  }
}

export default CharRace;
