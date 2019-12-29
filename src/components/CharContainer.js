import React, { Component } from 'react';
import { backgroundParagraphs,
         featureFromBackground,
         specialtyFromBackground,
         characteristicFromBackground } from '../services/dataParsers';
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

  rollableObject(object, key) {
    if(Object.entries(object).length !== 0) {
      return (
        <div key={key}>
          <strong>{object.label}</strong>
          <p>{object.description}</p>
          <strong>Roll 1d{object.rollDice.faces}</strong>
          <ul>
            { Object.entries(object.rolls).map((roll) => {
              return(<li key={roll[0]}>{roll[0].concat(' | ', roll[1])}</li>)
            })}
          </ul>
        </div>
      )
    } else {
      return <br/>
    }
  }

  specialtyView() {
    let specialty = specialtyFromBackground(this.props.background)
    return this.rollableObject(specialty, 1) // index will always be 1
  }

  characteristicView() {
    let characteristic = characteristicFromBackground(this.props.background)
    return(
      <div>
        <strong>Suggested Characteristics</strong>
        <p>{characteristic.description}</p>
        {characteristic.characteristics.map((object, index) => {
          return this.rollableObject(object, index)
        })}
      </div>
    )
  }

  render() {
    const fluff = this.fluffView()
    const feature = this.featureView()
    const specialty = this.specialtyView()
    const characteristic = this.characteristicView()

    return(
      <div className="char-container">
        { fluff }
        { feature }
        { specialty }
        { characteristic }
      </div>
    )
  }
}

export default CharContainer;
