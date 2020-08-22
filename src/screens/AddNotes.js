import React, { useState } from "react";
import { View, Keyboard } from "react-native";
import { Text, FAB, TextInput } from "react-native-paper";
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
        <View style={{ width: "90%" }}>
          <TextInput
            label="Note Title"
            value={noteTitle}
            onChangeText={setNoteTitle}
            mode="flat"
          />
          <View style={{ marginTop: "5%" }}>
            <TextInput
              label="Note Description"
              value={noteDescription}
              onChangeText={setNoteDescription}
              multiline={true}
              scrollEnabled={true}
              returnKeyLabel="done"
              blurOnSubmit={true}
              mode="flat"
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={Styles.fabRow}>
          <FAB icon="plus" label="add" small />
          <FAB
            icon="close"
            label="cancel"
            small
            color={Styles.basicText.color}
            style={Styles.fabCancel}
            onPress={() => {
              navigation.replace("My Notes");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNotes;
