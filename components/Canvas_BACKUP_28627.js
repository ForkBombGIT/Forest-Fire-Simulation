import React from 'react'
import ReactDOM from 'react-dom'

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), id: props.canvas};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
<<<<<<< HEAD

  tick() {
    this.setState({
      date: new Date()
    });
    render();
  }

  render() {
    return (
      <div>
        <h1>{this.state.id}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

/*
export default class Canvas extends React.Component {
  constructor (props) {
    super(props);this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    console.log("hi");
    this.setState({
      date: new date()
    });
  }

  render () {
    return (
      <div>
        <h1>hello, world {this.state.date.toLocaleTimeString()}</h1>\
        <canvas />
      </div>
    )
  }
}

ReactDOM.render(
  <Canvas />,
  document.getElementById('root')
);

*/

/*
ReactDOM.render(
  <Canvas />,
  document.getElementById('root')
);


function update(props) {
  var c = document.getElementById(props.id);
  var ctx = c.getContext("2d");
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.stroke();
}

=======
  
  componentDidMount () {
    this.update();
  }
  
  render() {
        return (
             <div>
                {this.props.render()}
            </div>
        );
    }
  
  update() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  }
}

>>>>>>> master
//setInterval(update, 1000);


const layoutStyle = {

}

const Canvas = (props) => (
  <div style={layoutStyle}>
    <canvas id="myCanvas" width="100%" height="100"></canvas>
  </div>
)

function generate() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.stroke();
}
componentDidMount() {
    console.log('GrandChild did mount.');
}
setInterval(generate, 1000);

export default Canvas
*/
