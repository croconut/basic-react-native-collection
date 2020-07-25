import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (text) => {
    //super simple set, we don't care about previous strings
    setEnteredGoal(text);
  };

  const addGoalHandler = () => {
    props.onAdd(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal>
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttons}>
          <Button title="CANCEL" color="red" />
        </View>
        <View style={styles.buttons}>
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 2,
    paddingHorizontal: 10,
  },
  buttons: {
    paddingHorizontal: "15%",
    paddingVertical: 30,
  },
});

export default GoalInput;
