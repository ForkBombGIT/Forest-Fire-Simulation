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
    if (this.props.timer !== this.state.timerTick) {
      this.setState({
        timerTick: this.props.timer
      });
      this.props.manip.current.width = this.props.manip.current.offsetWidth;
    }
  }

  createGrid(width, height) {
    var tempArr = [];
    let x = ~~(width / 250);
    let y = ~~(height / 50);

    for (var n = 0; n < x; n++) {
      for (var nu = 0; nu < y; nu++) {
          tempArr.push(width)
      }
    }
    console.log(x)
    this.setState({
        grid: tempArr
    })
  }

  shouldComponentUpdate() {
    if (this.props.timer !== this.state.timerTick) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
      this.createGrid(this.props.manip.current.width, this.props.manip.current.width)
  }

  componentDidMount() {
      this.setState({
        timerTick: this.props.timer
      });
      this.props.manip.current.width = this.props.manip.current.offsetWidth;
  }

  renderTile(i) {
      return <Tile {...this.props} startPos={i}/>
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
