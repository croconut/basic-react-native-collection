import React, { useState } from "react";
import { Dark, Light } from "./src/globals/Colors";
import { View, StatusBar } from "react-native";
import Constants from "expo-constants";
import Styles from "./src/globals/Styles";
import { useTheme } from "@react-navigation/native";
// import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as Screens from "./src/screens/Screens";
import * as Tabs from "./src/tabs/Tabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const TopTabs = createMaterialTopTabNavigator();
const BottomTabs = createMaterialBottomTabNavigator();

export default function App() {
  const refreshedS = Styles();
  const parentStyle = refreshedS.screen;
  const MainTheme = Dark;
  // setting the primary color to card color for bottom tabs
  // cuz they use primary for their background for some reason...
  const TabTheme = {
    ...MainTheme,
    ...{
      colors: {
        primary: MainTheme.colors.card,
        background: MainTheme.colors.card,
        notification: MainTheme.colors.card,
      },
    },
  };
  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Screens.Home}
          options={{ title: "My Feed" }}
        />
        <Stack.Screen name="Details" component={Screens.Details} />
        <Stack.Screen name="Bottom Tabs" component={createBottomTabs} />
        <Stack.Screen name="Top Tabs" component={Screens.Contacts} />
      </Stack.Navigator>
    );
  };

  const createTopTabs = () => {
    return (
      <TopTabs.Navigator theme={TabTheme} style={{ marginTop: parentStyle.marginTop }}>
        <TopTabs.Screen name="Feed" component={createHomeStack} />
        <TopTabs.Screen
          name="Tab 1"
          component={Tabs.Tab1}
          options={{ title: "Home" }}
        />
        <TopTabs.Screen name="Tab 2" component={Tabs.Tab2} />
        <TopTabs.Screen name="Tab 3" component={Tabs.Tab3} />
      </TopTabs.Navigator>
    );
  };

  const createBottomTabs = () => {
    return (
      <BottomTabs.Navigator theme={TabTheme} style={{backgroundColor: TabTheme.colors.card}}>
        <BottomTabs.Screen name="Tab 1" component={Tabs.Tab1} />
        <BottomTabs.Screen name="Tab 2" component={Tabs.Tab2} />
        <BottomTabs.Screen name="Tab 3" component={Tabs.Tab3} />
      </BottomTabs.Navigator>
    );
  };

  return (
    <NavigationContainer theme={MainTheme}>
      <Drawer.Navigator
        drawerStyle={{ marginTop: parentStyle.marginTop }}
      >
        <Drawer.Screen name="Home" children={createTopTabs} />
        <Drawer.Screen name="Contacts" component={Screens.Contacts} />
        <Drawer.Screen name="Favorites" component={Screens.Favorites} />
        <Drawer.Screen name="Settings" component={Screens.Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
