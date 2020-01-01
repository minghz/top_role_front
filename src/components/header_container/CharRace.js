import React, { Component } from 'react';
import Select from 'react-select'
import { listNames, makeSelectable } from '../../services/helpers.js'
import RacesData from '../../data/races.json'

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
          options={makeSelectable(listNames(RacesData))}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default CharRace;
