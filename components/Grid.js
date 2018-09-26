import React from 'react'
import ReactDOM from 'react-dom'
import Tile from './Tile.js'

export default class Grid extends React.PureComponent {

  constructor(props) {
    super(props);
    this.grid = []
    this.timerTick = 0;
    this.dimensions = []
    this.createGrid = this.createGrid.bind(this);
    this.renderTile = this.renderTile.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillUpdate() {
  	  this.props.manip.current.width = this.props.manip.current.offsetWidth;
   		this.props.manip.current.height = this.props.manip.current.offsetHeight;

    if (this.props.manip.current.width !== this.dimensions[0] || this.props.manip.current.height !== this.dimensions[1]) {
    console.log("redrawing grid")
   		//console.log(this.props)
      this.dimensions = [this.props.manip.current.width, this.props.manip.current.height]
   		this.createGrid(this.props.manip.current.width, this.props.manip.current.height)
    }
  }

  componentDidMount() {
  	this.props.manip.current.width = this.props.manip.current.offsetWidth;
    this.props.manip.current.height = this.props.manip.current.offsetHeight;
    this.dimensions = [this.props.manip.current.width, this.props.manip.current.height]
  	this.createGrid(this.props.manip.current.width, this.props.manip.current.height)
    this.forceUpdate()
  }

  createGrid(width, height) {
    var tempArr = [];
    let x = ~~(width / 50);
    let y = ~~(height / 50);

    for (var h = 0; h < x; h++) {
      for (var w = 0; w < y; w++) {
          tempArr.push([(width/x) * h, 50 * w, width/x])
      }
    }
    this.grid = tempArr;
  }

  update() {

  }

  renderTile(i) {
      return <Tile {...this.props} key={i} startPos={i}/>
  }

  render() {
  	//console.log(this.state.grid)
    return <div>
      {
        (this.grid).map ((n) => {
          return this.renderTile(n)
        })
      }
    </div>
  }
}
