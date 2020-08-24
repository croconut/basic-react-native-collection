import React, { useState, useEffect } from "react";
import _ from "lodash";
import { View, FlatList } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import Styles from "../globals/Styles";
import { SafeAreaView } from "react-native-safe-area-context";

const ViewNotes = ({ route, navigation }) => {
  const [notes, setNotes] = useState([]);
  const [lastNote, setLastNote] = useState({});

  const addNotes = (note) => {
    // cant directly change / use the note object here
    setLastNote(note);
    var usableNote = _.cloneDeep(note);
    usableNote.id = notes.length + 1;
    setNotes([...notes, usableNote]);
  };

  const ListComponent = ({ item }) => {
    return (
      <List.Item
        title={item.title}
        description={item.body}
        left={props => <List.Icon {...props} icon="unfold-more-horizontal" />}
        right={props => <List.Icon {...props} icon="trash-can-outline" />}
        descriptionNumberOfLines={1}
        titleStyle={Styles.title}
        descriptionStyle={Styles.basicText}
      />
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
      {notes.length === 0 ? (
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>You do not have any notes.</Text>
        </View>
      ) : (
        <FlatList
          data={notes}
          renderItem={ListComponent}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <FAB
        style={Styles.fab}
        small
        icon="note-plus"
        label="Add a new note"
        onPress={() => {
          navigation.navigate("Add Notes");
        }}
      />
    </SafeAreaView>
  );
};

export default ViewNotes;
