import React from "react";
import { View, StyleSheet } from "react-native";

// this component only applies styles to the child containers
// allows props.styles to override any default card styles

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    padding: "2%",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 3,
  },
});

export default Card;
