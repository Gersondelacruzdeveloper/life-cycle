import React, { Component } from 'react'

export class CompWillUnMountChild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         mouseX: 0,
         mouseY: 0,
      }
    }

    trackMouse = (e)=>{
      console.log('mouse move')
      this.setState({
        mouseX: e.clientX,
        mouseY: e.clientY,
      })

    }
    componentDidMount(){
      console.log('componentDidMount called')

      window.addEventListener('mousemove', this.trackMouse)
    }

    componentWillUnmount(){
      console.log('componentWillUnmount called' )
      window.removeEventListener('mousemove', this.trackMouse)
    }


  render() {
    return (
      <div>
      <div>Mouse tracking</div>
       <p>X: {this.state.mouseX} Y: {this.state.mouseY}</p>
      </div>
    )
  }
}

export default CompWillUnMountChild