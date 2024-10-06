import FunComTest from "./FunComTest"
import { fireEvent, render, screen } from "@testing-library/react"
//todo==> This is first type to test  the functional component..
test('method testing methods 1', () => {
  render(<FunComTest />);
  const btn = screen.getByTestId('btn1');
  fireEvent.click(btn);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
})