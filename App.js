import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Stack from "./src/navigation/Stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={DarkTheme.colors.card}
      />
      <NavigationContainer theme={DarkTheme}>
        <Stack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
