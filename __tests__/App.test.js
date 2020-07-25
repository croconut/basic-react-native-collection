import { shallow } from "enzyme";
import React from "react";

import App from "../App";

describe("<App />", () => {
  // the app with no input from user yet
  it("renders correctly", () => {
    const tree = shallow(<App />);
    expect(tree).toMatchSnapshot();
  });

  // top level of app has one view component and one scrollable
  // view component as children
  it("has 2 correct children", () => {
    let childCount = 2;
    const tree = shallow(<App />);
    // top level is a View
    expect(tree.type().displayName).toBe("View");
    // has 2 children
    let children = tree.children();
    expect(children.length).toBe(childCount);
    // children are either views or flatlists, equality check
    // has to happen inside the toBe or expect for non-exact 
    // matching
    children.forEach((child) =>
      expect(child.name() === "View" || child.name() === "FlatList").toBe(
        true
      )
    );
    // want exactly two so using defined 0 and 1 is okay here
  });
});
