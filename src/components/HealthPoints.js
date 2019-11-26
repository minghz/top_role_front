import React, { Component } from 'react';

class HealthPoints extends Component {
  render() {
    return(
      <div className="health-points">
        HP current: {this.props.current} /
        HP max: {this.props.max}
      </div>
    )
  }
}

export default HealthPoints;
