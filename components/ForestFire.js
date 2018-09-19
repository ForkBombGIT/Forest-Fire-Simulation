import React from 'react'
import ReactDOM from 'react-dom'
import Canvas from './Canvas.js'
//<Grid manipCanvas={this.refs.canvaso} />

export default class ForestFire extends React.Component {
 constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvasRef} style={{width: '100%', height: "250px"}}></canvas>
        <Canvas manip={this.canvasRef}/>
      </div>
    );
  }
}
