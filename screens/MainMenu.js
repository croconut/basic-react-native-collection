import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import FontScalar from "../responsive/FontScalar";
import Card from "../components/Card";
import Colors from "../globals/Colors"

const MainMenu = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.inputText}>Select a Number</Text>
        <TextInput style={styles.inputText} placeholder="enter here" />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.secondary} onPress={() => {}} />
          </View>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.primary} onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
  );
};

// android only responds to elevation, the other
// shadow stuff only works on ios
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: "2%",
    alignItems: "center",
    justifyContent: "center",
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
});

export default MainMenu;
