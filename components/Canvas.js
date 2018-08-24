import React from 'react'
import ReactDOM from 'react-dom'
import Grid from './Grid.js'

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      into: 0
    };
  }

  componentDidMount() {
    this.refs.canvaso.width = this.refs.canvaso.offsetWidth;
    console.log(this.refs.canvaso)
  }

  componentDidUpdate() {
    if (this.props.currentTimer !== this.state.into) {
      this.setState({
        into: this.props.currentTimer
      });
      this.refs.canvaso.width = this.refs.canvaso.offsetWidth;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.currentTimer}</h1>
        <Grid manipCanvas={this.refs.canvaso} />
        <canvas ref="canvaso" style={{width: '100%', height: '100%'}}></canvas>
      </div>
    );
  }
}
