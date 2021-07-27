/* eslint-disable max-len */
import React, { Component } from 'react';
import ColorDisplay from '../ColorDisplay';
import { colorGenerator } from '../services/ColorGenerator';

export default class RandomColor extends Component {
    state = {
      randomColor: ''
    }

    handleColorChange = () => {
      const colors = ['green', 'yellow', 'cyan', 'pink', 'black', 'blue', 'red'];
      const color = colorGenerator(colors);
      this.setState({ randomColor: colors[color] });
    }
    componentDidMount() {
      this.interval = setInterval(() => this.handleColorChange(), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }
    // componentDidUpdate() {
    //   setInterval(this.handleColorChange(), 1000);
    // }

    render() {
      return (
        <>
          <ColorDisplay backgroundColor={this.state.randomColor}/>
          <button onClick={this.handleColorChange}>Randomize</button>
        </>
      );
    }
}
