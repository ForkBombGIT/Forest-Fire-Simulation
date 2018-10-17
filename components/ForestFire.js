import React from 'react'
import ReactDOM from 'react-dom';
import Canvas from './Canvas.js'

export default class ForestFire extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvasRef} style={{width: '100%', height: "500px"}}/>
        <Canvas canvRef={this.canvasRef}/>
      </div>
    )
  }
}
