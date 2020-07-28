import { StyleSheet } from "react-native";
import FontScalar from "../responsive/FontScalar";

// these styles are common between a bunch of components and were pulled out
// for reusability
export default Styles = StyleSheet.create({
  gameScreen: {
    zIndex: 0,
    paddingHorizontal: "2%",
    paddingTop: "28%",
    height: "100%",
    alignItems: "center",
  },
  smallText: {
    fontSize: FontScalar(18),
  },
  mediumText: {
    fontSize: FontScalar(24),
  },
  largeText: {
    fontSize: FontScalar(30),
  },
  largeContainer: {
    width: "90%",
    alignItems: "center",
    shadowColor: "black",
  },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: "5%",
  },
  button: {
    width: "35%",
  },
  minimalRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
