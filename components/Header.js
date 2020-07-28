import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FontScalar from "../responsive/FontScalar";
import Colors from "../globals/Colors";

const Header = (props) => {
  // passing the color from the header to the texts below
  // text color should be determined where bg color is :/
  return (
    <View style={styles.header}>
      <Text style={{...styles.headerTitle, ...{ color: styles.header.color }}}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    zIndex: 3,
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.primary.default[0],
    color: Colors.primary.default[1],
  },
  headerTitle: {
    paddingTop: "12%",
    paddingBottom: "2%",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: FontScalar(30),
  },
});

export default Header;
