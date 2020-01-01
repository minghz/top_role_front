import React, { Component } from 'react';
import Select from 'react-select'
import { listNames, makeSelectable } from '../../services/helpers.js'
import BackgroundsData from '../../data/backgrounds-full.json'

class CharBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { value: props.value, label: props.value }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedObj) {
    this.setState({value: selectedObj});
    this.props.onBackgroundChange(selectedObj.value);
  }

  render(){
    return(
      <div className="char-background">
        <strong>Background</strong>
        <Select
          value={this.state.value}
          options={makeSelectable(listNames(BackgroundsData))}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default CharBackground;
