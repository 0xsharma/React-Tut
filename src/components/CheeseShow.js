import React from 'react'
import { useEffect, useState } from 'react'

export default function CheeseShow(props) {
    const [Content, setContent] = useState('')

    useEffect(() => {
        var content = props.items.map((object)=>(
          <>
            {object} <br/>
          </>
        ))
        setContent(content)
    }, [props.items])

  return (
    <div>
        <hr/>
            Different Component
            <br/>
            {Content}
        <hr/>
    </div>
  )
}
