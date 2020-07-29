import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import FontScalar from "../responsive/FontScalar";
import Colors from "./Colors";

export default StyleSheet.create({
  screen: {
    height: "100%",
    marginTop: Constants.statusBarHeight,
    backgroundColor: Colors.primary.dark[0],
    color: Colors.primary.dark[1],
    alignItems: "center",
  },
  // the unstacked screens are special
  // this function also can't be called with normal () => style
  unstackedScreen: function () {
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
});
