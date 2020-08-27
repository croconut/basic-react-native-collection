import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { View, FlatList, Alert } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import Styles from "../globals/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
// import SpinIcon from "../components/SpinIcon";
import { addNote, deleteNote } from "../redux/reducers/NoteReducer";
import { TouchableOpacity } from "react-native-gesture-handler";

const ViewNotes = ({ route, navigation }) => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [lastNote, setLastNote] = useState({});

  const addNotes = (note) => {
    // cant directly change / use the note object here
    setLastNote(note);
    var usableNote = _.cloneDeep(note);
    dispatch(addNote(usableNote));
    //setNotes([...notes, usableNote]);
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
          navigation.navigate("Add Notes");
        }}
      />
    );
  };

  const ListComponent = ({ item }) => {
    return (
      <List.Item
        title={item.note.title}
        description={item.note.body}
        left={(props) => <List.Icon {...props} icon="unfold-more-horizontal" />}
        right={(props) => (
          <TouchableOpacity
            onPress={() => removeNotes(item.note.title, item.id)}
          >
            <List.Icon {...props} icon="trash-can-outline" />
          </TouchableOpacity>
        )}
        descriptionNumberOfLines={1}
        titleStyle={Styles.title}
        descriptionStyle={Styles.basicText}
      />
    );
  };

  const HaveNotesComponent = (props) => {
    return (
      <FlatList
        {...props}
        // style={{ marginBottom: "24%" }}
        // contentContainerStyle={{flexGrow: 1}}
        ListFooterComponent={<View style={{ marginBottom: "26%" }} />}
        data={notes}
        renderItem={ListComponent}
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
    if (route.params?.note) {
      // only really care about preventing use of the same note twice
      // in a row (generally that would be a mistake)
      // i could enforce unique title buuuuut meh
      if (
        lastNote.body !== route.params.note.body ||
        lastNote.title !== route.params.note.title
      ) {
        addNotes(route.params.note);
      }
    }
    // very important, not using the notes state as an effect dependency
    // only the ways in which we can affect it
  }, [route.params?.note]);

  return (
    <SafeAreaView style={Styles.container}>
      {notes.length === 0 ? <NoNotesComponent /> : <HaveNotesComponent />}
      {/*<SpinIcon icon="loading" duration={1000} color="grey" size={80} />*/}
      <AddNotesFAB />
    </SafeAreaView>
  );
};

export default ViewNotes;
