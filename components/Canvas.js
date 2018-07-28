import React from 'react'
import ReactDOM from 'react-dom'

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      int: 0,
      canvas: null
    };
  }

  componentDidMount() {
    this.state.timerID = setInterval(
      () => this.update(),
      60
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  update() {
    this.setState({
      date: new Date(),
      canvas: this.refs.canvas
    });

    const ctx = this.state.canvas.getContext("2d");
    this.state.canvas.width = this.state.canvas.offsetWidth;

    this.state.int += 3;
    ctx.moveTo(this.state.int, 0);
    ctx.lineTo(this.state.canvas.offsetWidth/2, 100);
    ctx.stroke();
  }

  render() {
    return (
      <div>
        <h1>{this.state.id}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <div>
           {this.props.render()}
       </div>
      </div>
    );
  }
}
