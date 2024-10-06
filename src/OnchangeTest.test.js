import {fireEvent, render.screen}from '@testing-library/react';
import OnchangeTest from "./OnchangeTest";


test("Onchange event testing",()=>{
  render(<OnchangeTest/>);

  const input= screen.getAllByRole("textbox");
  fireEvent.change(input,{target:{value:"abc"}});
  expect(input.value).toBe("abc")
  
})
