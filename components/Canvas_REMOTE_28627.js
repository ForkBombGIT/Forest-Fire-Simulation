import React from 'react'

export default class Canvas extends React.Component {
  constructor (props) {
    super(props);
  }
  
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

//setInterval(update, 1000);

/*
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
