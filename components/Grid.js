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
      
      this.props.context.moveTo(this.state.into, 0);
      this.props.context.lineTo(this.props.manipCanvas.offsetWidth/2, 100);
      this.props.context.stroke();
    }
  }

  //This has to be bound to work - probably update it later so that all the canvas editing is inside
  update() {

  }

  componentDidUpdate() {
//    if (this.props.currentTimer !== this.state.into) {
//    this.setState({
 //       into: this.props.currentTimer
//      });
//    }
  }

  render() {
    return (
      <div>
        <h1>Eyy</h1>
      </div>
    );
  }
}
