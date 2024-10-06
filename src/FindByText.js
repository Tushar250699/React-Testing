import React, { useEffect, useState } from 'react';

function FindByText(){

  const [data,setData]= useState();


 useEffect(()=>{
  setTimeout(()=>{
    setData(true);
  },4000)
 })


  return(
    <>
      <h1>FindByText and FindAllByText</h1>
      {
     data?<h1 style={{color:"green"}}>Data Found</h1>:<h1 style={{color:"red"}}>Sorry Data Does not Found....</h1>
      }
    </>
  )
}
export default FindByText;