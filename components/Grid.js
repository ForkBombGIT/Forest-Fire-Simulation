import React from 'react'
import ReactDOM from 'react-dom'
import Tile from './Tile.js'

export default class Grid extends React.PureComponent {
  constructor(props) {
    super(props);
    this.grid = []
    this.timerTick = 0;
    this.createGrid = this.createGrid.bind(this);
    this.renderTile = this.renderTile.bind(this);
  }

  componentWillUpdate() {
  	//Only run this on resizing - currently runs on every timer update
  	this.props.manip.current.width = this.props.manip.current.offsetWidth;
    this.props.manip.current.height = this.props.manip.current.offsetHeight;
    //console.log(this.props)
    this.createGrid(this.props.manip.current.width, this.props.manip.current.height)
  }

  componentDidMount() {
  	this.props.manip.current.width = this.props.manip.current.offsetWidth;
    this.props.manip.current.height = this.props.manip.current.offsetHeight;
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
