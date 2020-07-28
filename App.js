import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MainMenu from "./screens/MainMenu";
import GameOver from "./screens/GameOver";
import Game from "./screens/Game";
import Header from "./components/Header";
import Colors from "./globals/Colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds();
  };

  const resetGame = (roundsN) => {
    setUserNumber();
    setGuessRounds(roundsN);
  };

  const leaveGameOver = () => {
    setUserNumber();
    setGuessRounds();
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {!userNumber && !guessRounds && (
        <MainMenu startGameHandler={startGameHandler} />
      )}
      {userNumber && !guessRounds && (
        <Game userNumber={userNumber} resetGame={resetGame} />
      )}
      {!userNumber && guessRounds && (
        <GameOver rounds={guessRounds} leave={leaveGameOver} />
      )}
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
