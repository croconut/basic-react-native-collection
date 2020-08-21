import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Styles from "../globals/Styles";

const ViewNotes = (props) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>You do not have any notes.</Text>
      </View>
    </View>
  );
};

export default ViewNotes;
