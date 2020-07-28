import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import FontScalar from "../responsive/FontScalar";
import Card from "../components/Card";
import Colors from "../globals/Colors";
import Input from "../components/Input";

const MainMenu = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);

  const numberValidator = (input) => {
    setEnteredValue(input.replace(/[^0-9]/g, ""));
  };

  const resetNumber = () => {
    setEnteredValue("");
    setConfirm(false);
  };

  const badNumAlert = () => {
    Alert.alert("Invalid number!", "Number must be between 1 and 99", [
      { text: "Ok", style: "destructive", onPress: resetNumber },
    ]);
  };

  const confirmNumber = () => {
    if (enteredValue === "") {
      return badNumAlert();
    }
    const chosenN = parseInt(enteredValue);
    //should be guaranteed by the regex tho for second two checks
    if (isNaN(chosenN) || chosenN < 1 || chosenN > 99) {
      return badNumAlert();
    }
    setConfirm(true);
    setSelectedValue(chosenN);
    setEnteredValue("");
  };

  const confirmedOutput = () => {
    return (
      <Card style={styles.outputContainer}>
        <Text>{selectedValue}</Text>
      </Card>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.inputText}>Select a Number</Text>
          <Input
            keyboardType="number-pad"
            maxLength={2}
            placeholder="17"
            onChangeText={numberValidator}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={Colors.secondary}
                onPress={() => confirmNumber()}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.primary}
                onPress={() => resetNumber()}
              />
            </View>
          </View>
        </Card>
        {confirm && confirmedOutput()}
      </View>
    </TouchableWithoutFeedback>
  );
};

// android only responds to elevation, the other
// shadow stuff only works on ios
const styles = StyleSheet.create({
  screen: {
    padding: "2%",
    height: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: FontScalar(20),
    marginVertical: "2%",
  },
  inputText: {
    fontSize: FontScalar(16),
  },
  inputContainer: {
    width: "90%",
    alignItems: "center",
    shadowColor: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: "5%",
  },
  button: {
    width: "35%",
  },
  outputContainer: {
    marginTop: "3%",
  },
});

export default MainMenu;
