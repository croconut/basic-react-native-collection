import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FontScalar from "../responsive/FontScalar";
import Colors from "../globals/Colors";

const DynamicStyle = {
    backgroundColor: Colors.primary,

};

const Header = (props) => {
  return (
    <View style={{...styles.header, ...DynamicStyle }}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: FontScalar(22),
  },
});

export default Header;