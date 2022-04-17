import React, {useState } from 'react'
import CompWillUnMountReplaceChild from './CompWillUnMountReplaceChild'

const CompWillUnMountReplaceParent = () => {
  const [visible, setVisible] = useState(true)

  return(
      <div>
        <h1>{visible && <CompWillUnMountReplaceChild/>}</h1>
       <button onClick={()=>setVisible(!visible)}>toggle visibility</button>
       </div>
    )
}

export default CompWillUnMountReplaceParent