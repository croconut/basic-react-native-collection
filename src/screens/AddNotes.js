import React, { useState } from "react";
import { View } from "react-native";
import { Text, FAB } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "../globals/Styles";

const AddNotes = ({ route, navigation }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  const onSaveNote = () => {
    navigation.params.addNote({ noteTitle, noteDescription });
    navigation.replace("My Notes");
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>Add notes here.</Text>
      </View>
      <View style={Styles.fabRow}>
        <FAB icon="plus" label="add" small />
        <FAB
          icon="close"
          label="cancel"
          small
          color="white"
          style={{ backgroundColor: "#fc387c" }}
          onPress={() => {
            navigation.replace("My Notes");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddNotes;
