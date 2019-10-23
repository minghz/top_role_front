import React, { Component } from 'react';
import '../css/LevelsContainer.css'

class LevelsContainer extends Component {
  render() {
    return(
      <div className="levels-container">
        <div className="level-label">Level</div>
        <div className="level-value">{this.props.value}</div>
      </div>
    )
  }
}

export default LevelsContainer;
