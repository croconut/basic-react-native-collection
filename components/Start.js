import React from "react";
import { View, Text, Button } from "react-native";
import Styles from "../globals/Styles";
import Card from "./Card";
import NumberContainer from "./NumberContainer";
import Colors from "../globals/Colors";


//needs -> val, start fn and reselect fn
const Start = (props) => {
  const { value, start, reselect } = props;
  return (
    <Card style={Styles.largeContainer}>
      <View style={Styles.minimalRowContainer}>
        <Text style={Styles.smallText}>You chose </Text>
        <NumberContainer>{value}</NumberContainer>
      </View>
      <View style={Styles.rowContainer}>
        <View style={Styles.button}>
          <Button
            title="Start"
            color={Colors.secondary}
            onPress={start}
          />
        </View>
        <View style={Styles.button}>
          <Button
            title="Reselect"
            color={Colors.primary}
            onPress={reselect}
          />
        </View>
      </View>
    </Card>
  );
};

export default Start;
