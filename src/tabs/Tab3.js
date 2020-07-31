import React from "react";
import { View, Text } from "react-native";
import Styles from "../globals/Styles";

const Tab3 = (props) => {
  const refreshedS = Styles();
  return (
    <View style={refreshedS.stackedScreen}>
      <Text>Yes hello there, Tab3 reporting</Text>
    </View>
  );
};

export default Tab3;
