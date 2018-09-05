import React from 'react'
import ReactDOM from 'react-dom'

export default class Tile extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.manip.current.getContext("2d"))

    
  }

  render() {
    return (null);
  }
}
