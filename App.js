import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

export default function App() {
  return (
    <View style={{padding: 30}}>
      <View>
        <TextInput placeholder="Course goal" 
        style={{ borderBottomColor: 'black', borderBottomWidth: 2}}/>
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

