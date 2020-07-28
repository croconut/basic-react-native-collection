import React from "react";
import { Text, StyleSheet, View } from "react-native";



export default Game = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
  },
});
