// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

it("should have input equal to mikolaj", () => {
  const component = renderer.create(
      <>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   renderer.act(() => {
//     tree.props.onMouseEnter();
//   });
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   renderer.act(() => {
//     tree.props.onMouseLeave();
//   });
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
});
