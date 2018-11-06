import React from 'react'

export default class Tile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.timerTick = 1;
    this.stateColour = {
      "tree": "green",
      "empty": "transparent",
      "fire": "red",
      "weakFire" : "orange"
    };
  }

  drawRectangle = () => {
    var ctx = this.props.canvRef.current.getContext("2d")
    ctx.beginPath()
    //console.log(this.props.tileData.tileWidth)


    ctx.rect(this.props.tileData.startPosX, this.props.tileData.startPosY, this.props.tileData.tileWidth, this.props.tileData.tileHeight);
    //console.log(this.props.tileData.startPosX + " - " + this.props.tileData.startPosY + " - " + this.props.tileData.tileWidth + " - " + this.props.tileData.tileHeight);

    //console.log(this.props.tileData.startPosX + " - " + this.props.tileData.tileWidth)

    //ctx.rect(~~this.props.tileData.startPosX, Math.round(this.props.tileData.startPosY), Math.ceil(this.props.tileData.tileWidth), 10);
    //ctx.rect(~~this.props.tileData.startPosX, ~~this.props.tileData.startPosY,50, 10);
    /*
    var athing = this.props.tileData.startPosX/this.props.tileData.tileWidth;
    var anewthing = athing.toFixed(2)%2;
    if (anewthing != 0) {
      ctx.rect(~~this.props.tileData.startPosX, Math.round(this.props.tileData.startPosY), Math.ceil(this.props.tileData.tileWidth), 10);
    }
    else {
      ctx.rect(Math.ceil(this.props.tileData.startPosX), Math.round(this.props.tileData.startPosY), ~~this.props.tileData.tileWidth, 10);
    }
    */

    ctx.fillStyle = "transparent";
    ctx.fill();
    //ctx.lineWidth = 2;
    ctx.strokeStyle = this.stateColour[this.props.tileData.tileState];
    //ctx.strokeStyle ='rgb(' + (255*Math.random()|0) +","+ (255*Math.random()|0) +","+ (255*Math.random()|0)+')'
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
