import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FontScalar from "../responsive/FontScalar";
import Colors from "../globals/Colors";

// yeah dynamic styling unneeded, but this is how i'd do it, except
// as a function
// const DynamicStyle = (props) => {
//     return { 
//       backgroundColor: Colors.primary,
//     };
// };

// const Header = (props) => {
//   return (
//     <View style={(props) => { ...styles.header, ...DynamicStyle(props) }}>
//       <Text style={styles.headerTitle}>{props.title}</Text>
//     </View>
//   );
// };


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
    height: "25%",
    paddingTop: "12%",
    alignItems: "center",
    backgroundColor: "white",
  },
  headerTitle: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: "black",
    fontSize: FontScalar(22),
  },
});

export default Header;