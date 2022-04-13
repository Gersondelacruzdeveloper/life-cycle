import React, { Component } from 'react'

class Clock extends Component {

    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }


    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
      console.log('componentDidMount')
    }

    componentWillUnmount(){
      clearInterval(this.timerID);
      console.log('reseting')
    }

    
    tick() {
      this.setState({
        date: new Date()
      });
      // console.log('tick!')
    }


  render() {
    return (
      <div>
        <h1>Hello this is my time</h1>
        {this.state.date.toLocaleTimeString()}
       </div>
    )
  }

}

export default Clock
