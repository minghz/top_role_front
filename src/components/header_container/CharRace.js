import React, { Component } from 'react';
import Select from 'react-select'
import { listNames } from '../../services/helpers.js'
import RacesData from '../../data/races.json'

function selectableRaces() {
  let races = listNames(RacesData)
  let selectable = races.map(race => {
    return { value: race, label: race }
  })
  return selectable
}

class CharRace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { value: props.value, label: props.value }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedObj) {
    this.setState({value: selectedObj});
    this.props.onRaceChange(selectedObj.value);
  }

  render(){
    return(
      <div className="char-race">
        <strong>Race</strong>
        <Select
          value={this.state.value}
          options={selectableRaces()}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default CharRace;
