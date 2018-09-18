import React from 'react'
import ReactDOM from 'react-dom'

export default class Tile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      into: 0
    };
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.currentTimer !== this.state.timerTick) {
      this.setState({
        into: this.props.timer
      });
    var ctx = this.props.manip.current.getContext("2d")

    console.log("ion")
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.rect(this.props.startPos[0], this.props.startPos[1], this.props.startPos[2],50);
    ctx.stroke();
    }
  }


  render() {
    return (null);
  }
}
