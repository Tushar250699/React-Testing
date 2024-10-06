import { screen, render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import ClickEvent from './ClickEvent';

test("test the click event ", async () => {
  userEvent.setup();
  render(<ClickEvent />);
  const btn = screen.getByText("Click Me");
  await userEvent.click(btn);
  expect(screen.getByText("Hii")).toBeInTheDocument();
})