import { render } from "@testing-library/react";
import SnapShot from "./SnapShot";

test("snapshot test case",()=>{
  const view = render(<SnapShot/>)
  expect(view).toMatchSnapshot();
})