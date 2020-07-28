import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Start from "../components/Start";
import Select from "../components/Select";

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

  const start = () => {
    return;
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
    Keyboard.dismiss();
    setConfirm(true);
    setSelectedValue(chosenN);
    setEnteredValue("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        {confirm && (
          <Start value={selectedValue} start={start} reselect={resetNumber} />
        )}
        {!confirm && (
          <Select
            enteredValue={enteredValue}
            setEnteredValue={numberValidator}
            confirm={confirmNumber}
            reset={resetNumber}
          ></Select>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

// android only responds to elevation, the other
// shadow stuff only works on ios
const styles = StyleSheet.create({
  screen: {
    zIndex: 0,
    paddingHorizontal: "2%",
    paddingTop: "28%",
    height: "100%",
    alignItems: "center",
  },
});

export default MainMenu;
