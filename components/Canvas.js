import React from 'react'
import Grid from './Grid.js'

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTick: 0
    };
  }

  componentDidMount() {
    this.state.timerID = setInterval(
      () => this.update(),
      150
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  update() {
    if (this.state.currentTick === 60) {
      this.setState({
        currentTick: 0
      });
    }
    else {
      this.setState({
        currentTick: this.state.currentTick + 1
      });
    }
  }

  render() {
    return (
      <div>
        <Grid {...this.props} currentTimer={this.state.currentTick} />
      </div>
    );
  }
}
