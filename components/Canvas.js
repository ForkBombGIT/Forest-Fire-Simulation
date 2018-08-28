import React from 'react'
import ReactDOM from 'react-dom'
import Grid from './Grid.js'
//<Grid manipCanvas={this.refs.canvaso} />

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      into: 0
    };
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      into: this.props.currentTimer,
      context: this.canvasRef.current.getContext("2d")
    });
    this.canvasRef.current.width = this.canvasRef.current.offsetWidth;
  }

  componentDidUpdate() {
    if (this.props.currentTimer !== this.state.into) {
      this.setState({
        into: this.props.currentTimer
      });
      this.canvasRef.current.width = this.canvasRef.current.offsetWidth;
    }
  }

  getCanvas = () => {
    return this.state.context;
  }

  render() {
    return (
      <div>
        <h1>{this.props.currentTimer}</h1>
        <canvas ref={this.canvasRef} style={{width: '100%', height: '100%'}}></canvas>
        <Grid manip={this.canvasRef} />
      </div>
    );
  }
}
