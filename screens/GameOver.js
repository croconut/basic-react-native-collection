import React from "react";
import { View, Text, Button } from "react-native";
import Styles from "../globals/Styles";
import Colors from "../globals/Colors";
import Card from "../components/Card";

const GameOver = (props) => {
  const { leave, rounds } = props;
  return (
    <View style={Styles.gameScreen}>
      <Card style={{...Styles.largeContainer, ...{ paddingVertical: "8%" }}}>
        <Text style={Styles.largeText}>Victory!</Text>
        <View style={{ paddingVertical: "5%" }}>
          <Text style={Styles.smallText}>Ended after {rounds} guesses</Text>
        </View>
        <View style={Styles.button}>
          <Button
            title="New game"
            color={Colors.primary}
            onPress={leave}
          />
        </View>
      </Card>
    </View>
  );
};

export default GameOver;
