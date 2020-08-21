import React from "react";
import { View } from "react-native";
import { Text, FAB } from "react-native-paper";
import Styles from "../globals/Styles";
import { SafeAreaView } from "react-native-safe-area-context";

const ViewNotes = ({ route, navigation }) => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>You do not have any notes.</Text>
        <FAB
          style={Styles.fab}
          small
          icon="plus"
          label="Add a new note"
          onPress={() => {
            navigation.replace("Add Notes");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewNotes;
