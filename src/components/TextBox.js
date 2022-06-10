import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
//useState is used to make variable reactive. 


// var str = 'World!'

export default function TextBox() {

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: 'black',
    },
    display: str==='shraddha'? 'none':'inline',
  }));

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
    
    <ColorButton variant="contained">Contained</ColorButton> <br/>
    <br/>
    <Button variant="contained"
      style={{background:'black', color:'yellow'}}>
        contained
    </Button> 
    <br/>

    <br/>
    <input type="text" onChange={handleChange} />
    {/* <button onClick={handleChange}> Change </button> */}
    
    </div>
  )
}
