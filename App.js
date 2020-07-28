import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MainMenu from "./screens/MainMenu";
import Header from "./components/Header";
import Colors from "./globals/Colors";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <MainMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    height: "100%",
  },
});
