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

  const cancelAddHandler = () => {
    props.cancelAdd();
    setEnteredGoal("");
  };

  return (
    <Modal animationType="fade">
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttons}>
          <View style={styles.innerButton}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.innerButton}>
            <Button title="CANCEL" color="red" onPress={cancelAddHandler} />
          </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "7.5%",
    paddingTop: 10,
  },
  innerButton: {
    paddingTop: 10,
    width: "35%",
  },
});

export default GoalInput;
