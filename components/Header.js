import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FontScalar from "../responsive/FontScalar";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingVertical: 15,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: FontScalar(22),
  },
});

export default Header;