import React, { Component } from 'react';

class CharName extends Component {
  render(){
    return(
      <div className="char-name">
        {this.props.value}
      </div>
    );
  }
}

export default CharName;
