import React, { useState } from "react";
import { Text, StyleSheet, TextInput, View, Button } from "react-native";

/*
Must use property names, no CSS stuff here ofc
View by default uses flexbox. Organizes child elements in 1d space.
Default is column.

Wow so easy to make things look like shit
*/

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  // identical function methods
  // function goalInputHandler(text) {
  //   setEnteredGoal(text);
  // }

  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  }

  const addGoalHandler = () => {
    console.log(enteredGoal);
  }

  return (
    //Note the width gets ignored cuz the flexbox only gets to control the 
    //height as they're rows

    //added a justify content view on the text to center it
    <View style={styles.app}>
      <View style={styles.inputRow}>
        <TextInput placeholder="Course goal" 
          style={styles.textInput}
          onChangeText={goalInputHandler} 
          value={enteredGoal}
          />
        <Button title="ADD" 
          onPress={addGoalHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    paddingVertical: 30
  },
  inputRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textInput: {
    width: "80%", 
    borderColor: 'black', 
    borderWidth: 2, 
    paddingHorizontal: 10
  }
});

