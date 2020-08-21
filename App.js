import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import Stack from "./src/navigation/Stack";

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack />
    </NavigationContainer>
  );
}
