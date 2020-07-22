import React, { useState } from "react";
import { Text, StyleSheet, TextInput, View, Button } from "react-native";

/*
Must use property names, no CSS stuff here ofc
View by default uses flexbox. Organizes child elements in 1d space.
Default is column.

Wow so easy to make things look like shit
*/

export default function App() {
  return (
    //Note the width gets ignored cuz the flexbox only gets to control the 
    //height as they're rows

    //added a justify content view on the text to center it
    <View style={styles.app}>
      <View style={styles.topInput}>
        <TextInput placeholder="Course goal" 
          style={{ width: "80%", borderColor: 'black', 
          borderWidth: 2, paddingHorizontal: 10}}/>
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    paddingVertical: 30
  },
  topInput: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

