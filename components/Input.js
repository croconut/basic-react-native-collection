import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

//input also takes any prop a TextInput would normally support
const Input = (props) => {
  const { style } = props;
  return <TextInput {...props} style={{ ...styles.input, ...style }} ></TextInput>;
};

const styles = StyleSheet.create({
  input: {
    borderColor: "grey",
    borderRightWidth: 3,
    borderBottomWidth: 3,
    marginVertical: "2%",
    padding: "1%",
  },
});

export default Input;
