import React from 'react'
import ReactDOM from 'react-dom'

export default class Tile extends React.PureComponent {
    constructor(props) {
      super(props);
      this.timerTick = 1;
      this.drawRectangle = this.drawRectangle.bind(this);
    }

    drawRectangle(colour) {
      var ctx = this.props.canvRef.current.getContext("2d")
      ctx.beginPath()
      ctx.fillStyle = colour;
      ctx.rect(this.props.startPos[0], this.props.startPos[1], 		this.props.startPos[2],50);
      ctx.fill();
      ctx.stroke();
    }

    componentDidMount() {
			this.drawRectangle("red")
    }
    componentWillUpdate() {
      if (this.props.currentTimer !== this.timerTick) {
      this.timerTick = this.props.timer

			this.drawRectangle("red")
  	}
  }
  render() {
    return (null);
  }
}
