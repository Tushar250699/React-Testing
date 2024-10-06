import React, { useState } from 'react'

function SnapShot() {
  const [data,setData]= useState("");
  return (
    <>
  <button onClick={()=>setData("snapshot means we just copy the code and add that snapshot into the another file..")}>Click Here</button>
  <h1>{data}</h1>
    </>
  )
}

export default SnapShot