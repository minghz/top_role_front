import React, { Component } from 'react';

class CharBackground extends Component {
  render(){
    return(
      <div className="char-background">
        {this.props.value}
      </div>
    );
  }
}

export default CharBackground;
