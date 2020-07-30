import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
// import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import Constants from "expo-constants";
import FontScalar from "../responsive/FontScalar";
import { Dark, Light } from "./Colors";

//dynamically changes, need to call the function and store the result
export default function() {
  const theme = useTheme().dark ? Dark : Light;
  return StyleSheet.create({
    screen: {
      height: "100%",
      marginTop: Constants.statusBarHeight,
      backgroundColor: theme.colors.background,
      color: theme.colors.textSecondary,
      borderColor: theme.colors.border,
      alignItems: "center",
    },
    notification: {
      backgroundColor: theme.colors.notification,
      color: theme.colors.textSecondary,
    },
    // the unstacked screens are special
    // this function also can't be called with normal () => style
    // using get allows to call it like obj.unstackedScreen instead :)
    get unstackedScreen() {
      return { ...this.screen, ...{ marginTop: 0 } };
    },
    largeText: {
      fontSize: FontScalar(30),
    },
    mediumText: {
      fontSize: FontScalar(22),
    },
    smallText: {
      fontSize: FontScalar(18),
    },
    horizontalRow: {
      paddingTop: "15%",
      width: "90%",
      flexDirection: "row",
      justifyContent: "space-around",
    },
  });
};
