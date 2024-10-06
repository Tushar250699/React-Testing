import React from 'react'

function GetById() {
  return (
    <>
      <h1>testing by using getByTestId</h1>
      <h2 data-testid='heading'>Hello</h2>
      <div data-testid="para">Testing with the help of the getByTestId</div>

      {/* //todo==> for the use of the getAllByTestId .. */}

      <h2 data-testid="head">Hello getAllByTestId</h2>
      
      <h2 data-testid="head">Hello getAllByTestId</h2>
      
      <h2 data-testid="head">Hello getAllByTestId</h2>
      
      <h2 data-testid="head">Hello getAllByTestId</h2>
    </>


  )
}

export default GetById