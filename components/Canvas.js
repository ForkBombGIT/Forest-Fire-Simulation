import React from 'react'
import ReactDOM from 'react-dom'
import Grid from './Grid.js'
//<Grid manipCanvas={this.refs.canvaso} />

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvasRef} style={{width: '100%', height: '100%'}}></canvas>
        <Grid manip={this.canvasRef} timer={this.props.currentTimer}/>
      </div>
    );
  }
}
