import GetByDisplayValue from "./GetByDisplayValue"
import { render, screen } from '@testing-library/react'

test('test case 1 by using GetByDisplayValue', () => {
  render(<GetByDisplayValue />)
  const input = screen.getAllByDisplayValue("Tushar");
  for (let i = 0; i < input.length; i++) {
    expect(input[i]).toBeInTheDocument();
  }
})
