/* eslint-disable max-len */
import React, { Component } from 'react';
import ColorDisplay from '../ColorDisplay';
import { colorGenerator } from '../services/ColorGenerator';

export default class RandomColor extends Component {
    state = {
      randomColor: ''
    }

    handleColorChange = () => {
      this.setState({ randomColor: colorGenerator() });
    }
    componentDidMount() {
      this.interval = setInterval(() => this.handleColorChange(), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return (
        <>
          <ColorDisplay backgroundColor={this.state.randomColor}/>
          <button onClick={this.handleColorChange}>Randomize</button>
        </>
      );
    }
}
