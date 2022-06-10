import React from 'react'
import { useState, useEffect } from 'react'

export default function Addition() {

  const [sum, setSum] = useState(0)
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function handleChangeB(e){
    setB(e.target.value)
  }

  useEffect(() => {
    setSum(parseInt(a) + parseInt(b))
  }, [a, b])

  return (
    <>

      Number A : <input type="number" value={a} onChange={(e) => {setA(e.target.value); console.log("A changed")}} />
      <br/>
      Number B : <input type="number" value={b} onChange={handleChangeB} />
      <br/>
      SUM : {sum}

    </>
  )
}
