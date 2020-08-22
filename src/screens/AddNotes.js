import React, { useState } from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Text, FAB, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "../globals/Styles";
import FadeAnimation from "../components/FadeAnimation";

const AddNotes = ({ route, navigation }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [hideTitleInput, setHideTitleInput] = useState(false);
  const [hideDescriptionInput, setHideDescriptionInput] = useState(false);

  const onSaveNote = () => {
    navigation.params.addNote({ noteTitle, noteDescription });
    navigation.replace("My Notes");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={Styles.container}>
        <View style={Styles.titleContainer}>
          <View style={{ width: "90%" }}>
            <FadeAnimation visible={!hideTitleInput} fadeTime={200}>
              <TextInput
                label="Note Title"
                value={noteTitle}
                onFocus={() => {
                  setHideTitleInput(false);
                  setHideDescriptionInput(true);
                }}
                onBlur={() => {
                  setHideTitleInput(false);
                  setHideDescriptionInput(false);
                }}
                onChangeText={setNoteTitle}
                mode="flat"
              />
            </FadeAnimation>
            <FadeAnimation visible={!hideDescriptionInput} fadeTime={200}>
              <View style={{ marginTop: "5%" }}>
                <TextInput
                  label="Note Description"
                  value={noteDescription}
                  onFocus={() => {
                    setHideTitleInput(true);
                    setHideDescriptionInput(false);
                  }}
                  onBlur={() => {
                    setHideTitleInput(false);
                    setHideDescriptionInput(false);
                  }}
                  onChangeText={setNoteDescription}
                  multiline={true}
                  scrollEnabled={true}
                  returnKeyLabel="done"
                  blurOnSubmit={true}
                  mode="flat"
                />
              </View>
            </FadeAnimation>
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
    </TouchableWithoutFeedback>
  );
};

export default AddNotes;
