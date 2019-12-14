import React, { Component } from 'react';

class TemporaryHealthPoints extends Component {
  render() {
    return(
      <div className="temporay-health-points">
        Temp HP: {this.props.points}
      </div>
    )
  }
}

export default TemporaryHealthPoints;
