import React, { useState } from 'react'

function OnchangeTest() {

  const [data, setData] = useState("");
  return (
    <>
      <h1>Test onchange event with the input text</h1>
      <input type="text" placeholder='Enter Your Name' value={data} onChange={(e) => setData(e.target.value)} />
    </>
  )
}

export default OnchangeTest