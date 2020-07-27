import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MainMenu from "./screens/MainMenu";

export default function App() {
  return (
    <MainMenu />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
