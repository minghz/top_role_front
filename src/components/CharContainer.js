import React, { Component } from 'react';
import { backgroundParagraphs,
         featureFromBackground,
         specialtyFromBackground } from '../services/dataParsers';
import '../css/CharContainer.css';

class CharContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundParagraphs: backgroundParagraphs(this.props.background)
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.background !== prevProps.background) {
      this.setState({
        backgroundParagraphs: backgroundParagraphs(this.props.background)
      })
    }
  }

  arrayToParagraphs(array) {
    return(
      array.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>
      })
    )
  }

  fluffView() {
    return this.arrayToParagraphs(this.state.backgroundParagraphs)
  }

  featureView() {
    return (
      <div>
        <strong>{featureFromBackground(this.props.background).name}</strong>
        {this.arrayToParagraphs(featureFromBackground(this.props.background).description)}
      </div>
    )
  }

  specialtyView() {
    let specialty = specialtyFromBackground(this.props.background)

    if(Object.entries(specialty).length != 0) {
      return (
        <div>
          <strong>{specialty.label}</strong>
          <p>{specialty.description}</p>
          <strong>Roll 1d{specialty.rollDice.faces}</strong>
          <ul>
            { Object.entries(specialty.rolls).map((roll) => {
              return(<li key={roll[0]}>{roll[0].concat(' | ', roll[1])}</li>)
            })}
          </ul>
        </div>
      )
    } else {
      return <br/>
    }
  }

  render() {
    const fluff = this.fluffView()
    const feature = this.featureView()
    const specialty = this.specialtyView()

    return(
      <div className="char-container">
        { fluff }
        { feature }
        { specialty }
      </div>
    )
  }
}

export default CharContainer;
