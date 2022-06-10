import React from 'react'
import { useState, useEffect } from 'react'

//useState is used to make variable reactive. 


// var str = 'World!'

export default function TextBox() {

  const [str, setStr] = useState('World!')
  
  useEffect(() => {
    setStr('Default')
  }, [])

  useEffect(() => {
    console.log('str changed : ', str)
  }, [str])
  

  function handleChange(e) {

    setStr(e.target.value)
    
  }

  return (
    <div>TextBox :: {str} 
    <br/><br/>
    
    <input type="text" onChange={handleChange} />
    {/* <button onClick={handleChange}> Change </button> */}
    
    </div>
  )
}
