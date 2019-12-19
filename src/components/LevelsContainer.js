import React, { Component } from 'react';
import '../css/LevelsContainer.css'
import * as helpers from '../services/helpers';

class LevelsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      proficiencyBonus: props.proficiencyBonus
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    var newLevel = event.target.value
    this.setState({
      value: newLevel,
      proficiencyBonus: helpers.proficiencyBonusFromLevel(newLevel)
    });
    this.props.onLevelChange(newLevel);
  }

  render() {
    return(
      <div className="levels-container">
        <div className="level-label">Level</div>
        <input className="level-value"
          type="number"
          value={this.state.value}
          onChange={this.handleChange} />
        <p>Proficiency Bonus: {this.props.proficiencyBonus}</p>
      </div>
    )
  }
}

export default LevelsContainer;
