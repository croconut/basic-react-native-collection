import React from "react";
import { View, Text, Button } from "react-native";
import Styles from "../globals/Styles";
import Card from "./Card";
import Input from "./Input";
import Colors from "../globals/Colors";

//needs -> setEnteredValue fn, enteredValue, confirm fn and reset fn
const Select = (props) => {
  return (
    <Card style={Styles.largeContainer}>
      <Input
        keyboardType="number-pad"
        maxLength={2}
        placeholder="17"
        onChangeText={props.setEnteredValue}
        value={props.enteredValue}
      />
      <View style={Styles.rowContainer}>
        <View style={Styles.button}>
          <Button
            title="Confirm"
            color={Colors.secondary}
            onPress={props.confirm}
          />
        </View>
        <View style={Styles.button}>
          <Button
            title="Reset"
            color={Colors.primary}
            onPress={props.reset}
          />
        </View>
      </View>
    </Card>
  );
};

export default Select;
