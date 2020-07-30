import React, { useState } from "react";
import { Dark, Light} from "./src/globals/Colors";
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
  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screens.Home} />
        <Stack.Screen name="Details" component={Screens.Details} />
        <Stack.Screen name="Top Tabs" children={createTopTabs} />
        <Stack.Screen name="Bottom Tabs" component={createBottomTabs} />
      </Stack.Navigator>
    );
  };

  const createTopTabs = () => {
    return (
      <TopTabs.Navigator>
        <TopTabs.Screen name="Tab 1" component={Tabs.Tab1} />
        <TopTabs.Screen name="Tab 2" component={Tabs.Tab2} />
        <TopTabs.Screen name="Tab 3" component={Tabs.Tab3} />
      </TopTabs.Navigator>
    );
  };

  const createBottomTabs = () => {
    return (
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="Tab 1" component={Tabs.Tab1} />
        <BottomTabs.Screen name="Tab 2" component={Tabs.Tab2} />
        <BottomTabs.Screen name="Tab 3" component={Tabs.Tab3} />
      </BottomTabs.Navigator>
    );
  };

  return (
    <NavigationContainer theme={Light}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Contacts" component={Screens.Contacts} />
        <Drawer.Screen name="Favorites" component={Screens.Favorites} />
        <Drawer.Screen name="Settings" component={Screens.Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
