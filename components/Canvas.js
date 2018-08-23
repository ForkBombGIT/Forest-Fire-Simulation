import React from 'react'
import ReactDOM from 'react-dom'

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      into: 0
    };
  }

  componentDidMount() {
    this.refs.canvaso.width = this.refs.canvaso.offsetWidth;
  }

  //This has to be bound to work - probably update it later so that all the canvas editing is inside
  update() {

  }

  componentDidUpdate() {
    if (this.props.currentTimer !== this.state.into) {
      this.setState({
        into: this.props.currentTimer
      });

      const ctx = this.refs.canvaso.getContext("2d");
      this.refs.canvaso.width = this.refs.canvaso.offsetWidth;

      ctx.moveTo(this.state.into, 0);
      ctx.lineTo(this.refs.canvaso.offsetWidth/2, 100);
      ctx.stroke();
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.currentTimer}</h1>
        <canvas ref="canvaso" style={{width: '100%', height: '100%'}}></canvas>
      </div>
    );
  }
}
