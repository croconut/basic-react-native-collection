import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

/*
Must use property names, no CSS stuff here ofc
View by default uses flexbox. Organizes child elements in 1d space.
Default is column.
*/

export default function App() {
  return (
    //Note the width gets ignored cuz the flexbox only gets to control the 
    //height as they're rows
    <View style={{paddingHorizontal: 30,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%', height: 300}}>
        <Text>112532</Text>
        <TextInput placeholder="Course goal" 
        style={{ width: "70%", borderColor: 'black', borderWidth: 2, paddingHorizontal: 10}}/>
        <Button title="ADD" />
      </View>
  );
}

