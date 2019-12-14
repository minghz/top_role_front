import React, { Component } from 'react';

class CharBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      backgrounds: props.backgrounds
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.currentTarget.value});
    this.props.onBackgroundChange(event.currentTarget.value);
  }

  render(){
    return(
      <div className="char-background">
        <strong>Background</strong>
        <select value={this.state.value} onChange={this.handleChange} >
          { this.state.backgrounds.map((value, index) => {
            return <option key={index} value={value}>{value}</option>
          })}
        </select>
      </div>
    );
  }
}

export default CharBackground;
