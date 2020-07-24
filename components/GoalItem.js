import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.onDelete(props.id)}
      >
        <View style={styles.goalsListItem}>
          <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
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
