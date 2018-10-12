import React from 'react'
import Tile from './Tile.js'

export default class Grid extends React.PureComponent {
  constructor(props) {
    super(props);

    this.grid = []
    this.timerTick = 0;
    this.gridData = {
    		canvasSize: {},
        probTree: 0.99,
        probBurn: 0.001,

    }
    this.unique = 0;
  }

  componentWillUpdate(prevProps) {
    let width = this.props.canvRef.current.width
    this.props.canvRef.current.width = this.props.canvRef.current.offsetWidth;
    this.props.canvRef.current.height = this.props.canvRef.current.offsetHeight;

    if (this.props.canvRef.current.width !== this.gridData.canvasSize.x || this.props.canvRef.current.height !== this.gridData.canvasSize.y) {
      this.gridData.canvasSize.x = this.props.canvRef.current.width;
      this.gridData.canvasSize.y = this.props.canvRef.current.height;

      this.createGrid()
    }
    this.update();
  }

  componentDidMount(prevProps) {
    this.props.canvRef.current.width = this.props.canvRef.current.offsetWidth;
    this.props.canvRef.current.height = this.props.canvRef.current.offsetHeight;
    this.gridData.canvasSize.x = this.props.canvRef.current.width;
    this.gridData.canvasSize.y = this.props.canvRef.current.height;

    this.generate()
    this.forceUpdate()
  }

  createGrid = () => {
    var prevArr = JSON.parse(JSON.stringify(this.grid));
    var tempArr = [];
    this.grid = [];

    let width = this.gridData.canvasSize.x
    let height = this.gridData.canvasSize.y
    let x = this.gridData.numCol = ~~(width / 50);
    let y = this.gridData.numRow = ~~(height / 50);

    for (var w = 0; w < y; w++) {
      for (var h = 0; h < x; h++) {
        if (prevArr[w][h] == undefined) {
          tempArr.push({
          	startPosX: (width / x) * h,
          	startPosY: (height / y) * w,
          	tileWidth: width / x,
          	tileHeight: height / y,
          	tileState: Math.random() > this.gridData.probTree ? "tree" : "empty"
          });
        } else {
          tempArr.push({
         		startPosX: (width / x) * h,
          	startPosY: (height / y) * w,
          	tileWidth: width / x,
          	tileHeight: height / y,
          	tileState : prevArr[w][h].tileState
          });
      	}
      }
      this.grid.push(tempArr)
      tempArr = []
    }
  };

  update = () => {
  //console.log(this.grid)
    let prevArray = JSON.parse(JSON.stringify(this.grid));

    for (var w = 0; w < this.grid.length; w++) {
      for (var h = 0; h < this.grid[w].length; h++) {
        if (prevArray[w][h].tileState == "empty") {
          Math.random() > this.gridData.probTree ? this.grid[w][h].tileState = "tree" : this.grid[w][h].tileState = "empty";
        }
        else if (prevArray[w][h].tileState == "tree") {
          if ((w > 0) && (prevArray[w - 1][h].tileState == "fire") ||
            (w < prevArray.length - 1) && (prevArray[w + 1][h].tileState == "fire") ||
            (h > 0) && (prevArray[w][h - 1].tileState == "fire") ||
            (h < prevArray[w].length - 1) && (prevArray[w][h + 1].tileState == "fire")) {
            	this.grid[w][h].tileState = "fire"
          }
          else {
            if (Math.random() < this.gridData.probBurn) {
            	this.grid[w][h].tileState = "fire";
            }
          }
        }
        else if (prevArray[w][h].tileState == "fire") {
        	this.grid[w][h].tileState = "weakFire"
        }
        else {
        	this.grid[w][h].tileState = "empty"
        }
      }
    }
  }

  generate = () => {
    var tempArr = [];

    let width = this.gridData.canvasSize.x
    let height = this.gridData.canvasSize.y
    let x = this.gridData.numCol = ~~(width / 50);
    let y = this.gridData.numRow = ~~(height / 50);

    for (var w = 0; w < y; w++) {
      for (var h = 0; h < x; h++) {
        tempArr.push({
         		startPosX: (width / x) * h,
          	startPosY: (height / y) * w,
          	tileWidth: width / x,
          	tileHeight: height / y,
          	tileState : Math.random() > this.gridData.probTree ? "tree" : "empty"
          });
      }
      this.grid.push(tempArr)
      tempArr = []
    }
    //this.grid = tempArr;
  }

  renderTile = (i) => {
    this.unique++;
    //console.log(i)
    return <Tile key = { this.unique } { ...this.props } tileData = { i } />
  }

  render() {
    //console.log(this.grid)
    return <div> {
        (this.grid).map((n) => {
          return (
            (n).map((x) => {
              return this.renderTile(x)
            })
          )
        })
      }
    </div>
  }
}
