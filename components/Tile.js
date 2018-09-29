import React from 'react'
import ReactDOM from 'react-dom'

export default class Tile extends React.PureComponent {
    constructor(props) {
      super(props);
      this.timerTick = 1;
      this.stateColour = {
      	"tree"  : "green",
        "empty" : "white",
        "fire"  : "red"
      };

      this.drawRectangle = this.drawRectangle.bind(this);
    }

    drawRectangle() {
      var ctx = this.props.canvRef.current.getContext("2d")
      ctx.beginPath()

      ctx.fillStyle = this.stateColour[this.props.startPos[3]];
      ctx.rect(this.props.startPos[0], this.props.startPos[1],this.props.startPos[2],50);
      ctx.fill();
      ctx.strokeStyle = this.stateColour[this.props.startPos[3]];
      ctx.stroke();
    }


    componentDidMount() {
			this.drawRectangle()
    }

    componentWillUpdate() {
      if (this.props.currentTimer !== this.timerTick) {
      	this.timerTick = this.props.timer
				this.drawRectangle()
  		}
  	}

  	render() {
   	 	return (null);
  	}
}
