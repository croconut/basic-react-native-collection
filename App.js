import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

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
    <View style={{paddingVertical: 40, paddingHorizontal: 10,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'stretch', height: 300}}>
        <View style={{justifyContent: 'center'}}><Text>112532</Text></View>
        <TextInput placeholder="Course goal" 
        style={{ width: "50%", borderColor: 'black', borderWidth: 2, paddingHorizontal: 10}}/>
        <Button title="ADD" />
      </View>
  );
}

