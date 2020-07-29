import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as Screens from "./screens/Screens";
import * as Tabs from "./tabs/Tabs";

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
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Contacts" component={Screens.Contacts} />
        <Drawer.Screen name="Favorites" component={Screens.Favorites} />
        <Drawer.Screen name="Settings" component={Screens.Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
