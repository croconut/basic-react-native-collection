import { StyleSheet } from "react-native";
import FontScalar from "../responsive/FontScalar";

export default Styles = StyleSheet.create({
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
