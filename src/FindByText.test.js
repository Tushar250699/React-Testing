import FindByText from "./FindByText"
import { render, screen } from '@testing-library/react';

test('test case 1 by using FindByAllText', async() => {
  render(<FindByText />);

  const res =   await screen.findByText("Data Found",{},{timeout:5000});
  expect(res).toBeInTheDocument();

})

test('test case 2 by using findByAllText',async()=>{
  render(<FindByText/>);

  const res2 =  await screen.findByText("Sorry Data Does not Found....",{},{timeout:2000});
  expect(res2).toBeInTheDocument();

})