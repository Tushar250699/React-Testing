import { render, screen } from '@testing-library/react';
import GetByLabelText from "./GetByLabelText"

test("getByLabelText case 1", () => {
  render(<GetByLabelText />)
  const input = screen.getByLabelText("Username");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("Tushar");
})

test("getByLabelText case 2", () => {
  render(<GetByLabelText />);
  const input1 = screen.getByLabelText("skill");
  expect(input1).toBeInTheDocument();

})

//todo==> The below test cases for to test getByAllLabelText....

test("getByAllLabelText case 1",()=>{
  render(<GetByLabelText/>);
  const input2 =screen.getAllByLabelText("Name");

  for(let i=0; i<input2.length; i++){
    expect(input2[i]).toBeInTheDocument();
  }
})

test("getByAllLabelText case 2",()=>{
  render(<GetByLabelText/>);
  const input3 = screen.getAllByLabelText("Ok");
  for (let i=0; i<input3.length; i++){
    expect(input3[i]).toBeInTheDocument();
  }
})