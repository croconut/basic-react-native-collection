import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from '../globals/Colors';
import FontScalar from "../responsive/FontScalar";

const NumberContainer = (props) => {
  const { style, children } = props;
  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      borderWidth: 2,
      borderColor: Colors.tertiary,
      padding: "1%",
      borderRadius: 10,
      marginVertical: "2%",
  },
  number: {
      color: Colors.secondary,
      paddingHorizontal: "1.5%",
      fontSize: FontScalar(22),
  }
});

export default NumberContainer;
