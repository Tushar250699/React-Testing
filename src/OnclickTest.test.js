import OnclickTest from "./OnclickTest"
import { screen, render, fireEvent } from "@testing-library/react";

// beforeAll(()=>{
//   console.log("this hook is use for the printing something before any of the test");
// })

// afterAll(()=>{
//   console.log("once after all the tests in the test suit have completed");
// })


// beforeEach(()=>{
//   console.log("set up before each test");
// })

afterEach(()=>{
  console.log("clean up after each test");
})

test("onclick event testing 1", () => {
  render(<OnclickTest />);

 
  const btn1 = screen.getByText("click me");
  fireEvent.click(btn1);
  expect(screen.getByText("counter is - 10")).toBeInTheDocument();

  const btn = screen.getByText("click message");
    fireEvent.click(btn);
  expect(screen.getByText("Welcome To Brainwork")).toBeInTheDocument();
})
test("onclick event testing 2", () => {
  render(<OnclickTest />);

 
  const btn1 = screen.getByText("click me");
  fireEvent.click(btn1);
  expect(screen.getByText("counter is - 10")).toBeInTheDocument();

  const btn = screen.getByText("click message");
    fireEvent.click(btn);
  expect(screen.getByText("Welcome To Brainwork")).toBeInTheDocument();
})
test("onclick event testing 3", () => {
  render(<OnclickTest />);

 
  const btn1 = screen.getByText("click me");
  fireEvent.click(btn1);
  expect(screen.getByText("counter is - 10")).toBeInTheDocument();

  const btn = screen.getByText("click message");
    fireEvent.click(btn);
  expect(screen.getByText("Welcome To Brainwork")).toBeInTheDocument();
})
test("onclick event testing 4", () => {
  render(<OnclickTest />);

 
  const btn1 = screen.getByText("click me");
  fireEvent.click(btn1);
  expect(screen.getByText("counter is - 10")).toBeInTheDocument();

  const btn = screen.getByText("click message");
    fireEvent.click(btn);
  expect(screen.getByText("Welcome To Brainwork")).toBeInTheDocument();
})