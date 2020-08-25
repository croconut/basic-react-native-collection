import React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import {
  DarkTheme as PaperTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Provider as ReduxProvider } from "react-native-redux";
import { StatusBar } from "react-native";
import Stack from "./src/navigation/Stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SpinIcon from "./src/components/SpinIcon";

export default function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider
        loading={<SpinIcon icon="loading" size={80} color="grey" />}
      >
        <PaperProvider theme={PaperTheme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={DarkTheme.colors.card}
          />
          <NavigationContainer theme={DarkTheme}>
            <Stack />
          </NavigationContainer>
        </PaperProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}
