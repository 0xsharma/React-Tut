import React from 'react'
import TextBox from "../components/TextBox";
import Addition from "../components/Addition";

export default function Page1() {
  return (
    <div>Page1
        <br/><br/>
        <h5>Content from home page is moved to this page. (below)</h5>
        <br/>

        Hello World!
      <TextBox />
      
      <br/>
      <hr/>
      <br/>

      <Addition />

      <br/>
    </div>
  )
}
