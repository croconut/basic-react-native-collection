import React from "react";
import { Animated, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const SpinIcon = (props) => {
  const { duration = 1000, icon = "loading", size = 120 } = props;
  const spin = new Animated.Value(0);

  const manualLoop = () => {
    Animated.sequence([
      Animated.delay(duration / 10),
      Animated.timing(spin, {
        toValue: 1,
        duration: duration,
        // easing: Easing.linear,
        // loop just doesnt work with the native driver
        useNativeDriver: true,
      }),
    ]).start(() => {
      spin.setValue(0);
      manualLoop();
    });
  };

  const spinDeg = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  manualLoop();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AnimatedIcon
        style={{ transform: [{ rotate: spinDeg }] }}
        name={icon}
        size={size}
        {...props}
      />
    </View>
  );
};

export default SpinIcon;
