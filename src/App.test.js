// import { render, screen } from '@testing-library/react'
// import App from './App';

// test("Test1 First React App", () => {
//   render(<App />)
//   const text = screen.getByText(/First React Test Case/i);
//   // todo ==> if we dont want to check the caser sentitivity then simply add the {/..../i}

//   const title = screen.getByTitle("AI image");
//   const text1 = screen.getByText("Rom Rom ji");
//   const para = screen.getByText("it is paragraph");
//   expect(title).toBeInTheDocument();
//   expect(text).toBeInTheDocument();
//   expect(text1).toBeInTheDocument();
//   expect(para).toBeInTheDocument();
// })

// test("Test2 the input in placeholder", () => {
//   render(<App />);
//   //todo ==> if i want to test the attributes then we use "toHaveAttribute"....
//   const inputPlaceHolder = screen.getByPlaceholderText("Enter Your Name");
//   //const checkInput = screen.getByRole("textbox");

//   expect(inputPlaceHolder).toBeInTheDocument();
//   // expect(checkInput).toBeInTheDocument();
//   expect(inputPlaceHolder).toHaveAttribute("name", "username");
//   expect(inputPlaceHolder).toHaveAttribute("id", "userId1");
// })


// //todo==> describe is the function which is used to group related tests together

// describe("describe is use to group the releated tests together", () => {
//   test("UI1 testing", () => {
//     render(<App />);
//     const describeTest = screen.getByText("describe is use to group the related tests");
//     expect(describeTest).toBeInTheDocument();

//     const describeInput = screen.getByPlaceholderText(/enter Your Phone Number/i);
//     expect(describeInput).toBeInTheDocument();
//   })


//   test("UI2 testing", () => {
//     render(<App />);
//     const describeTest = screen.getByText("describe is use to group the related tests");
//     expect(describeTest).toBeInTheDocument();

//     const describeInput = screen.getByPlaceholderText(/enter Your Phone Number/i);
//     expect(describeInput).toBeInTheDocument();
//   })

//   describe.skip("UI4 testing", () => {
//     test("UI3 testing", () => {
//       render(<App />);
//       const describeTest = screen.getByText("describe is use to group the related tests");
//       expect(describeTest).toBeInTheDocument();
//     })
//   })
// })