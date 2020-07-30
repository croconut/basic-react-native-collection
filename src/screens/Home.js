import React from "react";
import { View, Text, Button } from "react-native";
import Styles from "../globals/Styles";

const Home = (props) => {
  const { navigation } = props;
  const refreshedS = Styles();
  const parentStyle = refreshedS.unstackedScreen;
  const notificationStyle = refreshedS.notification;
  return (
    <View style={parentStyle}>
      <Text style={{ ...refreshedS.largeText, ...{ color: parentStyle.color } }}>
        Welcome
      </Text>
      <View style={{ paddingTop: "15%" }}>
        <Button
          title="See more"
          color={notificationStyle.backgroundColor}
          style={notificationStyle}
          onPress={() => {
            navigation.navigate("Details");
          }}
        />
      </View>
    </View>
  );
};

export default Home;
