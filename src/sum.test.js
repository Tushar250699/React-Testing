import sum from "./sum";

 test("testing for some function",()=>{
  let a=30;
  let b=40;
  let output = 70;
  expect(sum(a,b)).toBe(output);
 })