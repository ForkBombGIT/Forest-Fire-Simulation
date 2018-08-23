import React from 'react'
import ReactDOM from 'react-dom'
import Canvas from './Canvas.js'
//import grid from './Grid'
//import DataModel from './DataModel'

export default class ForestFire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTick: 0
    };
  }

  componentDidMount() {
    this.state.timerID = setInterval(
      () => this.update(),
      600
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  update() {
    if (this.state.currentTick === 60) {
      this.setState({
        currentTick: 0
      });
    }
    else {
      this.setState({
        currentTick: this.state.currentTick + 1
      });
    }
  }

  render() {
    return (
      <div>
        <Canvas currentTimer={this.state.currentTick} />
      </div>
    );
  }
}
