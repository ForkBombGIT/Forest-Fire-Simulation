import React from 'react'
import ReactDOM from 'react-dom'
import Tile from './Tile.js'

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        grid: [0]
    };
    this.timerTick = 0;
    this.createGrid = this.createGrid.bind(this);
    this.renderTile = this.renderTile.bind(this);
  }

  shouldComponentUpdate() {
  	if (this.props.currentTimer !== this.timerTick) {
    	this.timerTick = this.props.currentTimer;
  		return true;
    }
    return false;
  }

  componentWillUpdate() {
  	//Only run this on resizing - currently runs on every timer update
  	this.props.manip.current.width = this.props.manip.current.offsetWidth;
    this.props.manip.current.height = this.props.manip.current.offsetHeight;
    this.createGrid(this.props.manip.current.width, this.props.manip.current.height)
  }
  componentWillMount() {
  	console.log(this.props)
  	//this.props.manip.current.width = this.props.manip.current.offsetWidth;
    //this.createGrid(this.props.manip.current.width, this.props.manip.current.height)
  }
  componentDidMount() {
  	console.log(this.props)
  	this.props.manip.current.width = this.props.manip.current.offsetWidth;
    this.props.manip.current.height = this.props.manip.current.offsetHeight;
    console.log(this.props.manip.current.height)
    this.createGrid(this.props.manip.current.width, this.props.manip.current.height)
  }

  createGrid(width, height) {
    var tempArr = [];
    let x = ~~(width / 50);
    let y = ~~(height / 50);
    console.log(y)

    for (var h = 0; h < x; h++) {
      for (var w = 0; w < y; w++) {
          tempArr.push([(width/x) * h, 50 * w, width/x])
      }
    }
    this.setState({
        grid: tempArr
    })
  }

  renderTile(i) {
      return <Tile {...this.props} key={i} startPos={i}/>
  }

  render() {
  	//console.log(this.state.grid)
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
