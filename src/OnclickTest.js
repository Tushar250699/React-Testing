import React, { useState } from 'react';

function OnclickTest() {

  const [value, setValue] = useState(0);
  const [data, setData] = useState("");

  const onclickEvent = () => {
    setValue(value + 10);
  }
  return (
    <>
      <button onClick={onclickEvent}>click me</button>
      <h1>counter is - {value}</h1>
      <button onClick={() => setData("Welcome To Brainwork")}>click message</button>
      <h1 style={{ fontFamily: "cursive", color: "green" }}>{data}</h1>
    </>
  )
}
export default OnclickTest