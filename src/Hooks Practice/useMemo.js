import { useState } from "react";

 

const useMemo = ()=>{

const [number,setNumber] = useState(0);

  function Multiplication(num){
   console.log('calculation is done');
   return num *num;
  }

  const result = Multiplication();

  return(
    <>
   <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
   <h1>{result}</h1>
    </>
  )
}
export default useMemo;