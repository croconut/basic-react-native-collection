import React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import {
  DarkTheme as PaperTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Provider as ReduxProvider } from "react-native-redux";
import { Provider as StoreProvider } from "react-redux";
import { StatusBar } from "react-native";
import Stack from "./src/navigation/Stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SpinIcon from "./src/components/SpinIcon";
import Store from "./src/redux/Store";

export default function App() {
  return (
    <SafeAreaProvider>
      {/*<ReduxProvider
        loading={<SpinIcon icon="loading" size={80} color="grey" />}
      >*/}
      <StoreProvider store={Store}>
        <PaperProvider theme={PaperTheme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={DarkTheme.colors.card}
          />
          <NavigationContainer theme={DarkTheme}>
            <Stack />
          </NavigationContainer>
        </PaperProvider>
      </StoreProvider>
    </SafeAreaProvider>
  );
}
