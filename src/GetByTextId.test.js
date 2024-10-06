import GetById from "./GetById"
import { render, screen } from '@testing-library/react';

test("test case by using getByTestId", () => {
  render(<GetById />);

  const heading = screen.getByTestId("heading");
  expect(heading).toBeInTheDocument();

  const para = screen.getByTestId("para");
  expect(para).toBeInTheDocument();
})

test("test case by using getAllByTestId", () => {
  render(<GetById />);

  const heads = screen.getAllByTestId("head");

  for (let i = 0; i < heads.length; i++) {
    expect(heads[i]).toBeInTheDocument();
  }
})