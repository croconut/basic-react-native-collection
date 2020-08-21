import React from "react";
import { View } from "react-native";
import { Text, FAB } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "../globals/Styles";

const AddNotes = ({ route, navigation }) => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>Add notes here.</Text>
      </View>
    </SafeAreaView>
  );
};

export default AddNotes;
