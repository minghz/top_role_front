import React, { Component } from 'react';
import '../css/StatsContainer.css';
import ArmorClass from './ArmorClass';
import HealthPoints from './HealthPoints';
import TemporaryHealthPoints from './TemporaryHealthPoints';

class StatsContainer extends Component {
  render() {
    return(
      <div className="stats-container">
        <ArmorClass dexMod={this.props.dexMod} armorBase={0} shieldMod={0}/>
        <HealthPoints max={this.props.max} current={this.props.current} />
        <TemporaryHealthPoints points={this.props.tmp} />
      </div>
    )
  }
}

export default StatsContainer;
