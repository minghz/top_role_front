import React, { Component } from 'react';

class CharRace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      races: props.races
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.currentTarget.value});
    //this.state.callback(event.currentTarget.value);
    this.props.onRaceChange(event.currentTarget.value);
  }

  render(){
    return(
      <div className="char-race">
        <select value={this.state.value} onChange={this.handleChange} >
          { this.state.races.map((value, index) => {
              return <option key={index} value={value}>{value}</option>
          })}
        </select>
      </div>
    );
  }
}

export default CharRace;
