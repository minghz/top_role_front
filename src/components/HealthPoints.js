import React, { Component } from 'react';
import '../css/HealthPoints.css';

class HealthPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
      max: props.max
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var newHp = parseInt(event.target.value) || 0

		if(newHp < 0) { newHp = 0 }
		if(newHp > this.state.max) { newHp = this.state.max }

    event.target.value = newHp

    this.setState({current: newHp});
    this.props.onHpChange(newHp);
  }

  render() {
    return(
      <div className="health-points">
        <strong>Health Points</strong>
        <input className="current" data-testid="currentHp"
          type="number"
          value={this.state.current}
          onChange={this.handleChange} />
        <hr />
        <div className="max" data-testid="maxHp">
          {this.state.max}
        </div>
      </div>
    )
  }
}

export default HealthPoints;
