import React, { Component } from 'react';
import '../css/CharContainer.css';

class CharContainer extends Component {
  render() {
    return(
      <div className="char-container">
        { this.props.paragraphs.map((paragraph) => {
          return <p>{paragraph}</p>
        })}
      </div>
    )
  }
}

export default CharContainer;
