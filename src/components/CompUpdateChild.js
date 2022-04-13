import React, { Component } from 'react'

export class CompUpdateChild extends Component {
    constructor(props) {
        console.log('constructor called')
      super(props)
        
      this.state = {
         greeting:'Hello!'
      }
    }

    updateGreeting = () =>{
        console.log('updateGreeting called')
        this.setState(prevState => {
            return{
                greeting: prevState.greeting === 'Hello!' ? 'Goodbye' : 'Hello!'
            }
        })

    }
    componentDidUpdate(){
        console.log('componentDidUpdate called')
    }


  render() {
      console.log('render method called')
    return (
      <div>
         <h1>{this.state.greeting}</h1>
         <button onClick={this.updateGreeting}>update greeting</button>
      </div>

    )
  }
}
export default CompUpdateChild
