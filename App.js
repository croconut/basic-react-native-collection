import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./components/Header";

export default function App() {
  const [outputText, setOutputText] = useState("Open up App.js to start");
  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
