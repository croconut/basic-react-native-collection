import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList, Modal } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

/*
Must use property names, no CSS stuff here ofc
View by default uses flexbox. Organizes child elements in 1d space.
Default is column.

Wow so easy to make things look like shit

Scrollview is bad if theres too many elements as all the scrollview
list items will be rendered, regardless of whether its visible to viewer
*/

export default function App() {
  // examples for each of a string, array and dictionary
  const [courseGoals, setCourseGoals] = useState([]);
  const [courseGoalKeys, setCourseGoalKeys] = useState({});
  const [isAddMode, setIsAddMode] = useState(false);

  // identical function methods
  // function goalInputHandler(text) {
  //   setEnteredGoal(text);
  // }

  const removeGoalHandler = (goalKey) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key != goalKey);
    });
    // deletes are fucking slow with this method
    setCourseGoalKeys((currentGoalKeys) => {
      return Object.keys(currentGoalKeys).filter((goal) => goal.key != goalKey);
    });
  };

  const addGoalHandler = (enteredGoal) => {
    //using dictionary to guarantee goal uniqueness now
    if (enteredGoal in courseGoalKeys) {
      return;
    }
    //maintain the previous states of the array/dicts with ...arr, newitem
    setCourseGoals(() => [...courseGoals, { key: enteredGoal }]);
    //this will break on tiny syntax changes, kinda finicky
    setCourseGoalKeys(() => ({ ...courseGoalKeys, [enteredGoal]: "" }));
  };

  const dynamicFlexStyle = {
    flex: courseGoals.length,
  };

  return (
    //Note the width gets ignored cuz the flexbox only gets to control the
    //height as they're rows

    //added a justify content view on the text to center it
    //can move the scrollview to the top level view to stop the top row from
    //being frozen
    <View style={styles.app}>
      {!isAddMode && (
        <Button title="ADD GOAL" onPress={() => setIsAddMode(true)} />
      )}
      {isAddMode && <GoalInput onAdd={addGoalHandler} />}
      <View style={[styles.goalsList, dynamicFlexStyle]}>
        <FlatList
          data={courseGoals}
          renderItem={(data) => (
            <GoalItem
              onDelete={removeGoalHandler}
              id={data.item.key}
              title={data.item.key}
            />
          )}
          keyExtractor={(data) => data.key}
          extraData={courseGoals}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    paddingVertical: 30,
  },
  goalsList: {
    paddingTop: 10,
    paddingHorizontal: 5,
  },
});
