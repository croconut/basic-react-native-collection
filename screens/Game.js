import React, { useState } from "react";
import { Text, View, Button } from "react-native";

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

export default Game = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    createRandom(1, 100, props.userNumber)
  );
  return (
    <View style={Styles.gameScreen}>
      <Card style={Styles.largeContainer}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={Styles.rowContainer}>
          <View style={Styles.button}>
            <Button title="Lower" />
          </View>
          <View style={Styles.button}>
            <Button title="Higher" />
          </View>
        </View>
      </Card>
    </View>
  );
};
