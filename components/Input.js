import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

//input also takes any prop a TextInput would normally support
const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} ></TextInput>;
};

const styles = StyleSheet.create({
  input: {
    height: "22%",
    borderColor: "grey",
    borderRightWidth: 3,
    borderBottomWidth: 3,
    marginVertical: "2%",
    paddingHorizontal: "2%",
    paddingVertical: "1%",
  },
});

export default Input;
