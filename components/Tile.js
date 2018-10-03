import React from 'react'
import ReactDOM from 'react-dom'

export default class Tile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.timerTick = 1;
    this.stateColour = {
      "tree": "green",
      "empty": "white",
      "fire": "red"
    };
  }

  drawRectangle = () => {
    var ctx = this.props.canvRef.current.getContext("2d")
    ctx.beginPath()

    ctx.rect(this.props.tileData.startPosX, this.props.tileData.startPosY, this.props.tileData.tileWidth, this.props.tileData.tileHeight);
    //ctx.fillStyle = this.stateColour[this.props.tileData.tileState];
    ctx.fill();
    ctx.strokeStyle = this.stateColour[this.props.tileData.tileState];
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
  }}
