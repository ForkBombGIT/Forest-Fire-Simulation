import React from 'react'
import ReactDOM from 'react-dom'
import Tile from './Tile.js'

export default class Grid extends React.PureComponent {
  constructor(props) {
    super(props);

    this.grid = []
    this.timerTick = 0;
    this.dimensions = {}
    this.unique = 0;

    //this.createGrid = this.createGrid.bind(this);
    this.renderTile = this.renderTile.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillUpdate(prevProps) {
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

  	this.generate()
    this.forceUpdate()
  }

  createGrid = () => {
    let propTree = 0.5;
  	var prevArr = JSON.parse(JSON.stringify(this.grid));
    var tempArr = [];
    this.grid = [];
    let width = this.dimensions.canvasSize[0]
    let height = this.dimensions.canvasSize[1]
    let x = this.dimensions.numCol = ~~(width / 50);
    let y = this.dimensions.numRow = ~~(height / 50);

    for (var w = 0; w < y; w++) {
      for (var h = 0; h < x; h++) {
          if (prevArr[w][h] == undefined) {
          	tempArr.push([(width/x) * h, 50 * w, width/x, Math.random() > propTree ? "tree" : "empty"])
          }
          else {
          	console.log(width/x)
          	tempArr.push([(width/x) * h, 50 * w, width/x, prevArr[w][h][3]]);
          }

      }
      this.grid.push(tempArr)
      tempArr = []
    }
  };

  update() {
  	let prevArray = JSON.parse(JSON.stringify(this.grid));
    let probTree = 0.99;
    let probBurn = 0.001;

  	for (var h = 0; h < this.grid.length; h++) {
      for (var w = 0; w < this.grid[h].length; w++) {
        if (prevArray[h][w][3] == "empty") Math.random() > probTree ? this.grid[h][w][3] ="tree" : this.grid[h][w][3] = "empty";
        else if (prevArray[h][w][3] == "tree") {
        	if (	(h > 0) && (prevArray[h-1][w][3] == "fire") ||
          			(h < prevArray.length-1) && (prevArray[h+1][w][3] == "fire") ||
              	(w > 0) && (prevArray[h][w-1][3] == "fire") ||
          			(w  < prevArray[h].length-1) && (prevArray[h][w+1][3] == "fire")) {
              	this.grid[h][w][3] = "fire"
              }
           	else {
          		if (Math.random() < probBurn) this.grid[h][w][3] = "fire";
          	}
          }
          else if (prevArray[h][w][3] == "fire") this.grid[h][w][3] = "empty"
        }
      }
    }

  generate = () => {
    let propTree = 0.5;
    var tempArr = [];
    let width = this.dimensions.canvasSize[0]
    let height = this.dimensions.canvasSize[1]
    let x = this.dimensions.numCol = ~~(width / 50);
    let y = this.dimensions.numRow = ~~(height / 50);

    for (var w = 0; w < y; w++) {
      for (var h = 0; h < x; h++) {
          	tempArr.push([(width/x) * h, 50 * w, width/x, Math.random() > propTree ? "tree" : "empty"])
      }
      this.grid.push(tempArr)
      tempArr = []
    }
    //this.grid = tempArr;
  };

  renderTile(i) {
  		this.unique++;
      return <Tile key={this.unique} {...this.props} startPos={i}/>
  }

  render() {
  //console.log(this.grid)
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
