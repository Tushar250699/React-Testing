import renderer from "react-test-renderer";
import ClassComTest from "./ClassComTest";

test("class component method testing", () => {
  // Create the component and get its instance
  const componentData = renderer.create(<ClassComTest />).getInstance();

  // Check if the getUserList method returns or contains "userlist"
  expect(componentData.getUserList()).toMatch(/userlist/);
});
