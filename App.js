import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MainMenu from "./screens/MainMenu";
import Game from "./screens/Game";
import Header from "./components/Header";
import Colors from "./globals/Colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {!userNumber && <MainMenu startGameHandler={startGameHandler} />}
      {userNumber && <Game userNumber={userNumber}/>}
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
