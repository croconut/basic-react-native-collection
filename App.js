import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./components/Header";
import Styles from "./globals/Styles";

export default function App() {
  const [outputText, setOutputText] = useState("Open up App.js to start");
  return (
    <View style={Styles.screen}>
      <Header title="Guess a number" />
    </View>
  );
}
