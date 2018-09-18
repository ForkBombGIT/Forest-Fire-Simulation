import React from 'react'
import ReactDOM from 'react-dom'
import Tile from './Tile.js'

export default class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        timerTick: 0,
        grid: [0]
    };
    this.createGrid = this.createGrid.bind(this);
    this.renderTile = this.renderTile.bind(this);
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.currentTimer !== this.state.timerTick) {
      this.setState({
        timerTick: this.props.currentTimer
      });
      this.createGrid(this.props.manip.current.width, this.props.manip.current.width)
    }
  }

  createGrid(width, height) {
    var tempArr = [];
    let x = ~~(width / 500);
    let y = ~~(height / 300);

    for (var h = 0; h < x; h++) {
      for (var w = 0; w < y; w++) {
          tempArr.push([(width/x) * h, 50 * w, width/x])
      }
    }
    console.log(tempArr)
    this.setState({
        grid: tempArr
    })
  }

  componentDidMount() {
      this.setState({
        timerTick: this.props.timer
      });
      this.props.manip.current.width = this.props.manip.current.offsetWidth;
  }

  renderTile(i) {
      return <Tile {...this.props} key={i} startPos={i}/>
  }

  render() {
    return <div>
      <h1>{this.state.timerTick}</h1>
      {
        (this.state.grid).map ((n) => {
          return this.renderTile(n)
        })
      }
    </div>
  }
}
