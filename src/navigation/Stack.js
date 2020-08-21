import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ViewNotes from "../screens/ViewNotes";

const StackNav = createStackNavigator();

const Stack = () => {
  return (
    <StackNav.Navigator initialRouteName="Home" screenOptions={{}}>
      <StackNav.Screen name="Home" component={ViewNotes}></StackNav.Screen>
    </StackNav.Navigator>
  );
};

export default Stack;