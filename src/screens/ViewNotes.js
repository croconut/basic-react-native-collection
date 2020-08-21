import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import FontScalar from "../responsive/FontScalar";

const ViewNotes = (props) => {
  return (
    <View>
      <View>
        <Text>You do not have any notes.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: "2%",
    paddingHorizontal: "3.5%",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: FontScalar(20),
  },
});

export default ViewNotes;
