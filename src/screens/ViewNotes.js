import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { View, FlatList, Alert } from "react-native";
import { Text, FAB } from "react-native-paper";
import Styles from "../globals/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
// import SpinIcon from "../components/SpinIcon";
import { addNote, deleteNote, editNote } from "../redux/reducers/NoteReducer";
import ListItem from "../components/ListItem";

const ViewNotes = ({ route, navigation }) => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [lastNote, setLastNote] = useState({});

  const addNotes = (note) => {
    // cant directly change / use the note object here
    setLastNote(note);
    var usableNote = _.cloneDeep(note);
    dispatch(addNote(usableNote));
  };

  const editRedirect = (note, id) => {
    navigation.navigate("Edit Note", { note, id });
  };

  const editNotes = (note, id) => {
    setLastNote(note);
    var usableNote = _.cloneDeep(note);
    dispatch(editNote(usableNote, id));
  };

  const checkDeleteAlert = (title, id) => {
    Alert.alert(
      "Delete this note: " + title + "?",
      "This action is permanent",
      [
        {
          text: "Confirm",
          onPress: () => dispatch(deleteNote(id)),
        },
        {
          text: "Cancel",
        },
      ]
    );
  };

  const removeNotes = (title, id) => {
    checkDeleteAlert(title, id);
    // dispatch(deleteNote(id));
  };

  const AddNotesFAB = () => {
    return (
      <FAB
        style={Styles.fab}
        small
        icon="note-plus"
        label="Add a new note"
        onPress={() => {
          navigation.navigate("Add Note");
        }}
      />
    );
  };

  const HaveNotesComponent = (props) => {
    return (
      <FlatList
        {...props}
        ListFooterComponent={<View style={{ marginBottom: "26%" }} />}
        data={notes}
        renderItem={({ item }) => {
          return (
            <ListItem item={item} remove={removeNotes} edit={editRedirect} />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  };

  const NoNotesComponent = (props) => {
    return (
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>You do not have any notes.</Text>
      </View>
    );
  };

  useEffect(() => {
    if (!route.params?.note) {
      return;
    }
    if (
      lastNote.body === route.params.note.body &&
      lastNote.title === route.params.note.title
    ) {
      return;
    }
    if (route.params?.id !== "none") {
      editNotes(route.params.note, route.params.id);
    } else {
      addNotes(route.params.note);
    }
    // very important, not using the notes state as an effect dependency
    // only the ways in which we can affect it
  }, [route.params?.note, route.params?.id]);

  return (
    <SafeAreaView style={Styles.container}>
      {notes.length === 0 ? <NoNotesComponent /> : <HaveNotesComponent />}
      {/*<SpinIcon icon="loading" duration={1000} color="grey" size={80} />*/}
      <AddNotesFAB />
    </SafeAreaView>
  );
};

export default ViewNotes;
