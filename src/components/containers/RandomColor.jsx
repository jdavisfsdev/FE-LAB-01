import React, { Component } from 'react';
import ColorDisplay from '../ColorDisplay';
import { colorGenerator } from '../services/ColorGenerator';

export default class RandomColor extends Component {
    state = {
      randomColor: 'cyan'
    }

    handleColorChange = () => {
      const colors = ['green', 'yellow', 'cyan', 'pink'];
      const color = colorGenerator(colors);
      this.setState({ randomColor: colors[color] });
    }
    componentDidMount() {
      this.handleColorChange();
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
