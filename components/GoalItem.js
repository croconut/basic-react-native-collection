import React from "react";
import { Text, StyleSheet, View } from "react-native";

const GoalItem = props => {
  return (
    <View style={styles.goalsListItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalsListItem: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginVertical: 3,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
