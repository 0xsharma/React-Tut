import React from 'react'
import { useState, useEffect } from 'react'
import CheeseShow from '../components/CheeseShow'

export default function Page2() {
  
  const [CheckBoxData, setCheckBoxData] = useState(new Set([]))
  const [CheckBoxDataLength, setCheckBoxDataLength] = useState(0)
  const [Content, setContent] = useState('')

  function toggle(value){
    if(CheckBoxData.has(value)){
      CheckBoxData.delete(value)
      setCheckBoxData(CheckBoxData)
      setCheckBoxDataLength(CheckBoxDataLength+1)
    }else{
      CheckBoxData.add(value)
      setCheckBoxData(CheckBoxData)
      setCheckBoxDataLength(CheckBoxDataLength-1)
    }
  }

  useEffect(() => {
    console.log(CheckBoxData)
    var content = Array.from(CheckBoxData).map((object)=>(
      <>
        {object} <br/>
      </>
    ))
    
    setContent(content)
    
  }, [CheckBoxDataLength, CheckBoxData])
  

  return (
    <div>Page2
    <br/><br/>

    <input
          type="checkbox"
          value="Paneer"
          onChange={(e)=>toggle(e.target.value)}
    />Paneer
    <br/>
    <input
          type="checkbox"
          value="Cheese"
          onChange={(e)=>toggle(e.target.value)}
    />Cheese
    <br/>
    <input
          type="checkbox"
          value="Brie"
          onChange={(e)=>toggle(e.target.value)}
    />Brie

    <br/>
    <br/>
    
    <hr/>
    Same Component
    <br/>
    {Content}
    <hr/>
    <CheeseShow items={Array.from(CheckBoxData)}/>
    

    </div>
  )
}
