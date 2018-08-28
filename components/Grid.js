import React from 'react'
import ReactDOM from 'react-dom'

export default class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      into: 0
    };
  }

  componentDidMount() {
    if (this.props.currentTimer !== this.state.into) {
      this.setState({
        into: this.props.currentTimer
      });
      console.log(this.props.manip.current.getContext("2d"))
      var athing = this.props.manip.current.getContext("2d")
      //var x = this.props.manip.getContext("2d");

      athing.moveTo(this.state.into, 0);
      athing.lineTo(athing.offsetWidth/2, 100);
      athing.stroke();
    }
  }

  //This has to be bound to work - probably update it later so that all the canvas editing is inside
  update() {

  }

  componentDidUpdate() {
    if (this.props.currentTimer !== this.state.into) {
    this.setState({
        into: this.props.currentTimer
      });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.into}</h1>
      </div>
    );
  }
}
