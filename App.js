import React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { DarkTheme as PaperTheme, Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "react-native";
import Stack from "./src/navigation/Stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={PaperTheme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={DarkTheme.colors.card}
        />
        <NavigationContainer theme={DarkTheme}>
          <Stack />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
