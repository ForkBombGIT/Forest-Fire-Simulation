import React from 'react'
import ReactDOM from 'react-dom'
import Tile from './Tile.js'

export default class Grid extends React.PureComponent {
 constructor(props) {
    super(props);

    this.grid = []
    this.timerTick = 0;
    this.dimensions = {}

    //this.createGrid = this.createGrid.bind(this);
    this.renderTile = this.renderTile.bind(this);
    this.update = this.update.bind(this);
    this.generate = this.generate.bind(this);
  }

  componentWillUpdate() {
  	let width = this.props.canvRef.current.width
  	  this.props.canvRef.current.width = this.props.canvRef.current.offsetWidth;
   		this.props.canvRef.current.height = this.props.canvRef.current.offsetHeight;

    if (this.props.canvRef.current.width !== this.dimensions.canvasSize[0] || this.props.canvRef.current.height !== this.dimensions.canvasSize[1]) {
      this.dimensions.canvasSize = [this.props.canvRef.current.width, this.props.canvRef.current.height]
   		this.createGrid()
    }
    this.update();
  }

  componentDidMount(prevProps) {
  	this.props.canvRef.current.width = this.props.canvRef.current.offsetWidth;
    this.props.canvRef.current.height = this.props.canvRef.current.offsetHeight;
    this.dimensions.canvasSize = [this.props.canvRef.current.width, this.props.canvRef.current.height]

  	this.createGrid()
    this.forceUpdate()
    prevProps = null;
  }

  createGrid = () => {
  	this.grid = []
    var tempArr = [];
    let width = this.dimensions.canvasSize[0]
    let height = this.dimensions.canvasSize[1]
    let x = this.dimensions.numCol = ~~(width / 50);
    let y = this.dimensions.numRow = ~~(height / 50);

    for (var w = 0; w < y; w++) {
      for (var h = 0; h < x; h++) {
          tempArr.push([(width/x) * h, 50 * w, width/x])
      }
      this.grid.push(tempArr)
      tempArr = []
    }
    //this.grid = tempArr;
  };

  update() {
  	for (var h = 0; h < this.grid.length; h++) {
      for (var w = 0; w < this.grid[h].length; w++) {
     		//console.log(this.grid[h][w])
      }
    }
  }

  generate() {

  }

  renderTile(i) {
      return <Tile {...this.props} key={i} startPos={i}/>
  }

  render() {
  	//console.log(this.state.grid)
    return <div>
      {
        (this.grid).map ((n) => {
       	  return(
        		(n).map ((x) => {
          		return this.renderTile(x)
         	  })
          )
        })
      }
    </div>
  }
}
