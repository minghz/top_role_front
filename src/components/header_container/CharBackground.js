import React, { Component } from 'react';
import Select from 'react-select'
import { listNames } from '../../services/helpers.js'
import BackgroundsData from '../../data/backgrounds-full.json'

function selectableBackgrounds() {
  let backgrounds = listNames(BackgroundsData)
  let selectable = backgrounds.map(background => {
    return { value: background, label: background }
  })
  return selectable
}

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
          options={selectableBackgrounds()}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default CharBackground;
