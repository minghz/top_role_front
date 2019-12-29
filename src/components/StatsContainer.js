import React, { Component } from 'react';
import '../css/StatsContainer.css';
import ArmorClass from './ArmorClass';
import HealthPoints from './HealthPoints';

class StatsContainer extends Component {
  constructor(props){
    super(props);

    this.handleHpChange = this.handleHpChange.bind(this);
  }

  handleHpChange(newHp) {
    this.props.onHpChange(newHp)
  }

  render() {
    return(
      <div className="stats-container">
        <ArmorClass dexMod={this.props.dexMod} armorBase={0} shieldMod={0}/>
        <HealthPoints
          max={this.props.max}
          current={this.props.current}
          onHpChange={this.handleHpChange}/>
      </div>
    )
  }
}

export default StatsContainer;
