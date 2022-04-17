import React, { useState, useEffect} from 'react'


const CompWillUnMountReplaceChild =()=> {

    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

   const trackMouse = (e)=>{
      setMouseX(e.clientX)
      setMouseY(e.clientY)
      console.log('still working')
    }

    useEffect(()=>{
      window.addEventListener('mousemove', trackMouse)
      return ()=>{
        window.removeEventListener('mousemove', trackMouse)
      }
    })


    // componentWillUnmount(){
    //   console.log('componentWillUnmount called' )
    //   window.removeEventListener('mousemove', this.trackMouse)
    // }
    return (
      <div>
      <div>Mouse tracking</div>
       <p>X: {mouseX} Y: {mouseY}</p>
      </div>
    )
}

export default CompWillUnMountReplaceChild