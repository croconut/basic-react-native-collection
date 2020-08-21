// credit: https://stackoverflow.com/questions/33628677/react-native-responsive-font-size

import { Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// arbitrary really, just need something to resize a bit
// most tablet/mobile screens are somewhere between 720 and 280 width
const scale = SCREEN_WIDTH / 320;

const FontScalar = (size) => {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export default FontScalar;