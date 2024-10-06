import GetByPlaceHolder from "./GetByPlaceHolder"
import { render, screen } from '@testing-library/react';

// test("input test using getByPlaceHolder", () => {
//   render(<GetByPlaceHolder />);
//   const input = screen.getByPlaceholderText(/enter Name/i);
//   expect(input).toBeInTheDocument();

// })

//todo ==> if we have more than one placeholder with the same text then we can make use of the getByAllPlaceHolderText..

test("input test using the getByAllPlaceHolderText method",()=>{
 render(<GetByPlaceHolder/>);
 const inputs = screen.getAllByPlaceholderText("enter name");
  for(let i=0; i<inputs.length; i++){
    expect(inputs[i]).toBeInTheDocument();
    expect(inputs[i]).toHaveValue("Tushar");
  }
})