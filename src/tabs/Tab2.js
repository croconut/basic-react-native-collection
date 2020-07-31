import React from "react";
import { View, Text } from "react-native";
import Styles from "../globals/Styles";

const Tab2 = (props) => {
  const refreshedS = Styles();
  return (
    <View style={refreshedS.stackedScreen}>
      <Text>Yes hello there, Tab2 reporting</Text>
    </View>
  );
};

export default Tab2;
