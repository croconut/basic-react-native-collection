import { shallow } from "enzyme";
import React from "react";
import App from "../App";
import { View, StyleSheet, Platform } from "react-native";

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = shallow(<App />);
    expect(tree).toMatchSnapshot();
  });
});
