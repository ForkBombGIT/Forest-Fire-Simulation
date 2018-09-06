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
    if (this.props.timer !== this.state.timerTick) {
      this.setState({
        into: this.props.timer
      });
    var ctx = this.props.manip.current.getContext("2d")

    ctx.beginPath();
    ctx.moveTo(this.props.startPos, this.props.timer*5);
    ctx.lineTo(300,150);
    ctx.stroke();
    }
  }


  render() {
    return (null);
  }
}
