import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from '../globals/Colors';
import FontScalar from "../responsive/FontScalar";

const NumberContainer = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      borderWidth: 2,
      borderColor: Colors.tertiary,
      padding: "2%",
      borderRadius: 15,
      marginVertical: "3%",
      alignContent: 'center',
      justifyContent: 'center',
  },
  number: {
      color: Colors.secondary,
      fontSize: FontScalar(22),
      alignSelf: 'center',
  }
});

export default NumberContainer;
