import React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import {
  DarkTheme as PaperTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { StatusBar } from "react-native";
import Stack from "./src/navigation/Stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import { getStore, getPersistor } from "./src/redux/Store";
import SpinIcon from "./src/components/SpinIcon";

export default function App() {
  const store = getStore();
  const persistor = getPersistor();

  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <PersistGate
          persistor={persistor}
          // using defaults
          loading={SpinIcon}
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
        </PersistGate>
      </StoreProvider>
    </SafeAreaProvider>
  );
}
