import React from "react";
import { View, Text, Button } from "react-native";
import Styles from "../globals/Styles";
import Colors from "../globals/Colors";

const Home = (props) => {
  const { navigation } = props;
  const parentStyle = Styles.unstackedScreen();
  return (
    <View style={parentStyle}>
      <Text style={{ ...Styles.largeText, ...{ color: parentStyle.color } }}>
        Welcome
      </Text>
      <View style={{ paddingTop: "15%" }}>
        <Button
          title="See more"
          color={Colors.primary.light[0]}
          style={{ color: Colors.primary.light[1] }}
          onPress={() => {
            navigation.navigate("Details");
          }}
        />
      </View>
    </View>
  );
};

export default Home;
