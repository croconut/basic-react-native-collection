import React, { useState, useRef, useEffect } from "react";
import { Text, View, Button, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Styles from "../globals/Styles";

const createRandom = (min, max, exclude) => {
  const ran = parseInt(Math.floor(Math.random() * (max - min)) + min);
  if (ran === exclude) {
    if (ran > min) {
      return ran - 1;
    }
    return ran + 1;
  }
  return ran;
};

const badHintAlert = () => {
  Alert.alert("You cheater!", "Please give the computer the correct hint ;)", [
    {
      text: "My bad",
      style: "destructive",
    },
  ]);
};

const winAlert = (steps, onPress) => {
  Alert.alert("I win!", `Only took me ${steps} tries too.`, [
    {
      text: "Ok...",
      style: "destructive",
      onPress: onPress,
    },
  ]);
};

export default Game = (props) => {
  // how many guesses comp took
  const [stepCount, setStepCount] = useState(1);
  const [currentGuess, setCurrentGuess] = useState(
    createRandom(1, 100, props.userNumber)
  );
  const lowestGuess = useRef(1);
  const highestGuess = useRef(100);

  const lowerHelp = () => {
    if (currentGuess < props.userNumber) {
      badHintAlert();
      return false;
    }
    highestGuess.current = currentGuess;
    return true;
  };

  const higherHelp = () => {
    if (currentGuess > props.userNumber) {
      badHintAlert();
      return false;
    }
    // don't want to repeat the low guess
    lowestGuess.current = currentGuess + 1;
    return true;
  };

  const guessEnd = () => {
    setCurrentGuess(
      createRandom(lowestGuess.current, highestGuess.current, currentGuess)
    );
    setStepCount(stepCount + 1);
  };

  const lower = () => {
    if (!lowerHelp()) {
      return;
    }
    guessEnd();
  };

  const higher = () => {
    if (!higherHelp()) {
      return;
    }
    guessEnd();
  };

  return (
    <View style={Styles.gameScreen}>
      {currentGuess === props.userNumber &&
        winAlert(stepCount, props.resetGame)}
      <Card style={Styles.largeContainer}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={Styles.rowContainer}>
          <View style={Styles.button}>
            <Button title="Lower" onPress={() => lower()} />
          </View>
          <View style={Styles.button}>
            <Button title="Higher" onPress={() => higher()} />
          </View>
        </View>
      </Card>
    </View>
  );
};
