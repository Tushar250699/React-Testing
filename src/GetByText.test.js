import GetByText from "./GetByText"
import { render, screen } from '@testing-library/react';

test("test single and the multiple tests", () => {
  render(<GetByText />);
  const headings = screen.getAllByText("Hello");
  for (let i = 0; i < headings.length; i++) {
    expect(headings[i]).toBeInTheDocument();
  }
})

test("test case 2", () => {
  render(<GetByText />);
  const btns = screen.getAllByText("click");
  for (let i = 0; i < btns.length; i++) {
    expect(btns[i]).toBeInTheDocument();
  }
})

test("case test 3 ", () => {
  render(<GetByText />);
  const paras = screen.getAllByText(/paragraph/i);
  for (let i = 0; i < paras.length; i++) {
    expect(paras[i]).toBeInTheDocument();
  }
})