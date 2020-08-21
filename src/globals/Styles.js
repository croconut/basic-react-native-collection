import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { DarkTheme } from "@react-navigation/native";
import FontScalar from "../responsive/FontScalar";
import Colors from "./Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkTheme.colors.background,
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
    color: DarkTheme.colors.text,
  },
});
