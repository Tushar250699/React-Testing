import React, { useState } from 'react';

function ClickEvent(){

  const [data,setData]= useState("");
  return (
    <>
      <h1>Hii i am going to test click event</h1>
      <h2>{data}</h2>
      <button onClick={()=>setData("Hii")}>Click Me</button>
    </>
  )
}
export default ClickEvent;