import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

/*
Must use property names, no CSS stuff here ofc

*/

export default function App() {
  return (
    <View style={{padding: 30}}>
      <View style={{flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'}}>
        <TextInput placeholder="Course goal" 
        style={{ width: "70%", borderColor: 'black', borderWidth: 2, paddingHorizontal: 10}}/>
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

