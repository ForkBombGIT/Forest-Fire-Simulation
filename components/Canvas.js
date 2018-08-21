import React from 'react'
import ReactDOM from 'react-dom'
import Grid from './Grid'
import DataModel from './DataModel'

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: this.refs.canvaso,
      into: 0
    };
  }

  componentDidMount() {
    this.state.timerID = setInterval(
      () => this.update(),
      60
    );
    this.refs.canvaso.width = this.refs.canvaso.offsetWidth;
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  update() {
    this.setState({
      date: new Date(),
      canvas: this.refs.canvaso,
      into: this.state.into + 1
    });

    const ctx = this.state.canvas.getContext("2d");
    this.state.canvas.width = this.state.canvas.offsetWidth;

  //  this.state.int += 3;
    ctx.moveTo(this.state.into, 0);
    ctx.lineTo(this.state.canvas.offsetWidth/2, 100);
    ctx.stroke();
  }

  render() {
    return (
      <div>
        <h1>{this.state.into}</h1>
        <canvas ref="canvaso" style={{width: '100%', height: '100%'}}></canvas>
      </div>
    );
  }
}
