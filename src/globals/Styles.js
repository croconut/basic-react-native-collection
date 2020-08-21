import { StyleSheet } from "react-native";
import { DarkTheme } from "@react-navigation/native";
import FontScalar from "../responsive/FontScalar";

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
  fab: {
    margin: "3%",
    justifyContent: "center",
    position: "absolute",
    right: "1%",
    bottom: "2%",
  },
});
