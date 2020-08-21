import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ViewNotes from "../screens/ViewNotes";
import AddNotes from "../screens/AddNotes";

const StackNav = createStackNavigator();

const Stack = () => {
  return (
    <StackNav.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <StackNav.Screen name="Home" component={ViewNotes} />
      <StackNav.Screen name="Add Notes" component={AddNotes} />
    </StackNav.Navigator>
  );
};

export default Stack;
