import React from 'react'

function GetByLabelText() {
  return (
    <>
      <h1>GetByLabelText</h1>
      <label htmlFor='user-name'>Username</label>
      <input type='text' id='user-name' defaultValue={"Tushar"}></input>

      <label htmlFor='check'>skill</label>
      <input type='checkbox' id='check'></input>


      {/* //todo==>  for the getByAllLabelText */}

      <label htmlFor='name1'>Name</label>
      <input type='text' id='name1'></input>

      <label htmlFor='name2'>Name</label>
      <input type='text' id='name2' />

      <label htmlFor='name3'>Name</label>
      <input type='text' id='name3' />

      <br />
      <br />
      <label htmlFor='checkid1'>Ok</label>
      <input type='checkbox' id='checkid1'></input>

      <label htmlFor='checkid3'>Ok</label>
      <input type='checkbox' id='checkid3'></input>

      <label htmlFor='checkid2'>Ok</label>
      <input type='checkbox' id='checkid2'></input>
    </>
  )
}

export default GetByLabelText