import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Styles from "../globals/Styles";

const AddNotes = (props) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>Add notes here.</Text>
      </View>
    </View>
  );
};

export default AddNotes;
