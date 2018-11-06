import React from 'react'
import Canvas from './Canvas.js'

export default class ForestFire extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  render() {
    return (
      <div style={{width: '100%', height: "100%"}}>
        <canvas ref={this.canvasRef} style={{width: '100%', height: "100%"}} />
        <Canvas {...this.props} canvRef={this.canvasRef}/>
      </div>
    )
  }
}
