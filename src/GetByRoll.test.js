import { render, screen } from "@testing-library/react"
import GetByRoll from "./GetByRoll"

//todo==> The above test cases for the one type of the input fields and and one to one buttons .. it is temporory commented by me ..

// test("getbyroll test case 1 ", () => {
//   render(<GetByRoll />);
//   const inputField = screen.getByRole("textbox");
//   expect(inputField).toBeInTheDocument();
// })

// test("getbyroll test case 2", () => {
//   render(<GetByRoll />);
//   const inputField = screen.getByRole("textbox");
//   expect(inputField).toHaveValue("hello world");
//   expect(inputField).toBeDisabled();
// })

// test("getbyroll test case 3 for button", () => {
//   render(<GetByRoll />);
//   const btn = screen.getByRole("textbox");
//   expect(btn).toBeInTheDocument();
// })

//todo ==> test cases for the multiple input fields and the multiple buttons 


// test("getbyroll test case for the more  than one button element ", () => {
//   render(<GetByRoll />);
//   const btn1 = screen.getByRole("button", { name: "click 1" });
//   const btn2 = screen.getByRole("button", { name: "click 2" });
//   expect(btn1).toBeInTheDocument();
//   expect(btn2).toBeInTheDocument();
// });

// test("getbyroll test case for the more than one input field of the same type", () => {
//   render(<GetByRoll />);
//   const input1 = screen.getByRole("textbox", { name: "User Name" });
//   const input2 = screen.getByRole("textbox", { name: "User Age" });

//   expect(input1).toBeInTheDocument();
//   expect(input2).toBeInTheDocument();
// })

// test("getbyrole test case for the non semantic tags ",()=>{
//   render(<GetByRoll/>);
//   const dv = screen.getByRole("dummy");
//   expect(dv).toBeInTheDocument();
// })


//todo==> The below test cases using the getAllByRole to test the multiple elements at the one time..

test("test case for the multiple elements ", () => {
  render(<GetByRoll />);
  const btns = screen.getAllByRole("button");

  //   //todo==-> we can use  for loop for the test cases in this function..

  for (let i = 0; i < btns.length; i++) {
    expect(btns[i]).toBeInTheDocument();
  }
})

//todo==> checking the multiple options fields..

test("test case for  to test the multiple options fields", () => {
  render(<GetByRoll />);
  const options = screen.getAllByRole("option");

  for (let i = 0; i < options.length; i++) {
    expect(options[i]).toBeInTheDocument();
  }
})