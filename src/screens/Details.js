import React from "react";
import { View, Text, Button } from "react-native";
import Styles from "../globals/Styles";

const Details = (props) => {
  const { navigation } = props;
  const parentStyle = Styles.unstackedScreen;
  const notificationStyle = Styles.notification;
  return (
    <View style={parentStyle}>
      <Text style={{ ...Styles.largeText, ...{ color: parentStyle.color } }}>
        Details
      </Text>
      <View style={{ paddingTop: "15%", flexDirection: 'row', }}>
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
