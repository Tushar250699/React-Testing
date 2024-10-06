import React, { useState } from 'react';

function FunComTest() {

  const [data, setData] = useState("");

  const getData = () => {
    setData("Hello");
  }
  return (
    <>
      <button  data-testid="btn1" onClick={getData}>Click Here</button>
      <h1>{data}</h1>
    </>
  )
}
export default FunComTest;