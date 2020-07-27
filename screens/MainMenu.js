import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const MainMenu = (props) => {
  return (
    <View styles={styles.screen}>
      <Header title="Guess a Number" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainMenu;
