import React from "react";
import { View, Text, Button } from "react-native";
import Styles from "../globals/Styles";

const Details = (props) => {
  const { navigation } = props;
  const refreshedS = Styles();
  const parentStyle = refreshedS.unstackedScreen;
  const notificationStyle = refreshedS.notification;
  return (
    <View style={parentStyle}>
      <Text style={{ ...refreshedS.largeText, ...{ color: parentStyle.color } }}>
        Details
      </Text>
      <View style={refreshedS.horizontalRow}>
        <Button
          title="Bottom"
          color={notificationStyle.backgroundColor}
          style={notificationStyle}
          onPress={() => {
            navigation.navigate("Bottom Tabs");
          }}
        />
        <Button
          title="Top"
          color={notificationStyle.backgroundColor}
          style={notificationStyle}
          onPress={() => {
            navigation.navigate("Top Tabs");
          }}
        />
      </View>
    </View>
  );
};

export default Details;
