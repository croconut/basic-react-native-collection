import { StyleSheet } from "react-native";
// import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import Constants from "expo-constants";
import FontScalar from "../responsive/FontScalar";
import { Dark, Light } from "./Colors";

export default StyleSheet.create({
  screen: {
    height: "100%",
    marginTop: Constants.statusBarHeight,
    backgroundColor: Dark.colors.background,
    color: Dark.colors.textSecondary,
    borderColor: Dark.colors.border,
    alignItems: "center",
  },
  notification: {
    backgroundColor: Dark.colors.notification,
    color: Dark.colors.textSecondary,
  },
  get lightScreen() {
    return {
      ...this.screen,
      ...{
        borderColor: Light.colors.border,
        backgroundColor: Light.colors.background,
        color: Light.colors.textSecondary,
      },
    };
  },
  // the unstacked screens are special
  // this function also can't be called with normal () => style
  // using get allows to call it like obj.unstackedScreen instead :)
  get unstackedScreen() {
    return { ...this.screen, ...{ marginTop: 0 } };
  },
  get unstackedLightScreen() {
    return { ...this.lightScreen, ...{ marginTop: 0 } };
  },
  get lightNotification() {
    return {
      ...this.notification,
      ...{
        backgroundColor: Light.colors.notification,
        color: Light.colors.textSecondary,
      },
    };
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
});
