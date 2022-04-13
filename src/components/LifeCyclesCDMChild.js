import React, { Component } from 'react'

export class LifeCyclesCDMChild extends Component {
  constructor(props) {
    console.log('constructure called')
    super(props)
  
    this.state = {
       data: 'loading data'
    }
  }

  getData(){
    console.log('getData called')
    this.timeoutID = setTimeout(() => {
      console.log('data fetchex')
      this.setState({
        data:'Data loaded !'
      })
      
    }, 3000)
  }

componentDidMount(){
  console.log('component mounted')
  this.getData()
}


  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        </div>
    )
  }
}

export default LifeCyclesCDMChild