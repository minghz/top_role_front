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
    var newLevel = parseInt(event.target.value) || 0

    if(newLevel < 1) { newLevel = 1 }

		event.target.value = newLevel

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
        <input className="level-value" data-testid="levelValue"
          type="number"
          value={this.state.value}
          onChange={this.handleChange} />
        <p data-testid="profBonus">
          Proficiency Bonus: {this.props.proficiencyBonus}
        </p>
      </div>
    )
  }
}

export default LevelsContainer;
