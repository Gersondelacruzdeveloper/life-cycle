import React, { Component } from 'react'
import CompWillUnMountChild from './CompWillUnMountChild'

export class compWillUnMount extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       visible:true
    }
  }


  toggle = ()=>{
    this.setState((preState)=> ({ visible: !preState.visible}))
    console.log('toggle function called')
  }

  render() {
    console.log('render funtion called')
    return (
      <div>
        <h1>{this.state.visible && <CompWillUnMountChild/>}</h1>
       <button onClick={this.toggle}>toggle visibility</button>
        </div>
    )
  }
}

export default compWillUnMount