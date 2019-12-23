import React, { Component } from 'react';
import { backgroundParagraphs, featureFromBackground } from '../services/dataParsers';
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

  render() {
    const fluff = this.fluffView()
    const feature = this.featureView()

    return(
      <div className="char-container">
        { fluff }
        { feature }
      </div>
    )
  }
}

export default CharContainer;
