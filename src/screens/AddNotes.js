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
    navigation.navigate("My Notes", { note: {title: noteTitle, body: noteDescription }});
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={Styles.container}>
        <View style={Styles.titleContainer}>
          <View style={{ width: "90%" }}>
            <FadeAnimation visible={!hideTitleInput} fadeTime={200}>
              <TextInput
                label="Title"
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
              />
            </FadeAnimation>
            <FadeAnimation visible={!hideDescriptionInput} fadeTime={200}>
              <View style={{ marginTop: "5%" }}>
                <TextInput
                  label="Body"
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
            <FAB
              icon="note-plus"
              label="add"
              small
              disabled={
                noteDescription === "" && noteTitle === "" ? true : false
              }
              onPress={onSaveNote}
            />
            <FAB
              icon="close"
              label="cancel"
              small
              color={Styles.basicText.color}
              style={Styles.fabCancel}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddNotes;
