import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");
    const goalInputHandler = (text) => {
        //super simple set, we don't care about previous strings
        setEnteredGoal(text);
      };
    return (
        <View style={styles.inputRow}>
        <TextInput
          placeholder="Course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={() => props.onAdd(enteredGoal)} />
      </View>
    );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    paddingHorizontal: 10,
  },
});

export default GoalInput;
