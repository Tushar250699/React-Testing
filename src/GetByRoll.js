import React from 'react'

function GetByRoll() {
  return (
    <>
      {/* //todo==> this tags for the one to one testing .. */}
      {/* <h1>GetByRoll</h1>
  <input type='text' defaultValue="hello world" disabled />
  <button>click me</button> */}

      {/* //todo==> this are the tags for the more than one elements . */}

      {/* <h1>Testing for the multiple elements of the same type </h1>

      <button>click 1</button>
      <button>click 2</button>

      <label htmlFor='input1'>User Name</label>
      <input type='text' id='input1' />
      <label htmlFor='input2'>User Age</label>
      <input type='text' id='input2' /> */}

      {/* //todo==> so, non semantic tags doesnot have the role , we need to provide the role them for the testing. */}

      {/* <div role='dummy'>This is Dummy Text</div> */}


      {/* //TODO==> getAllByRole  is used to test multiple elements .. */}

     <button>click 1</button>
     
     <button>click 2</button>
     
     <button>click 3</button>
     
     <button>click 4</button> 


{/* <select>
  <options></options>
  <options></options>
  <options></options>
  <options></options>
</select> */}
    </>
  )
}

export default GetByRoll