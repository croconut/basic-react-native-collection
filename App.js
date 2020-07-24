import React, { useState } from "react";
import { Text, StyleSheet, TextInput, View, Button, ScrollView } from "react-native";

/*
Must use property names, no CSS stuff here ofc
View by default uses flexbox. Organizes child elements in 1d space.
Default is column.

Wow so easy to make things look like shit
*/

export default function App() {
  // examples for each of a string, array and dictionary
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [courseGoalKeys, setCourseGoalKeys] = useState({});

  // identical function methods
  // function goalInputHandler(text) {
  //   setEnteredGoal(text);
  // }

  const goalInputHandler = (text) => {
    //super simple set, we don't care about previous strings
    setEnteredGoal(text);
  }

  const addGoalHandler = () => {

    //using dictionary to guarantee goal uniqueness now
    if (enteredGoal in courseGoalKeys) {
      return;
    }
    //maintain the previous states of the array/dicts with ...arr, newitem
    setCourseGoals(() => [...courseGoals, enteredGoal]);
    //this will break on tiny syntax changes, kinda finicky
    setCourseGoalKeys(() => ( { ...courseGoalKeys, [enteredGoal]: ''} ));
  }

  return (
    //Note the width gets ignored cuz the flexbox only gets to control the 
    //height as they're rows

    //added a justify content view on the text to center it
    //can move the scrollview to the top level view to stop the top row from 
    //being frozen
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
      <ScrollView style={styles.goalsList}>
        { courseGoals.map((goal) => <View  key={goal} style={styles.goalsListItem}><Text>{goal}</Text></View>)}
      </ScrollView>
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
  },
  goalsList: {
    paddingTop: 10,
    paddingHorizontal: 5
  },
  goalsListItem: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginVertical: 3,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

