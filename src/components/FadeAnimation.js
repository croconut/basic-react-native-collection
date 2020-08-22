import React, { useRef, useEffect, useState } from "react";
import { Animated } from "react-native";

const FadeAnimation = (props) => {
  const { visible, fadeTime } = props;
  // fade in on first appearance
  const fadeAnim = useRef(new Animated.Value(visible ? 0 : 1)).current;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: fadeTime,
      useNativeDriver: false,
    }).start(() => {
      setIsVisible(visible);
    });
  }, [fadeAnim, visible, fadeTime]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
        transform: [{ scale: fadeAnim }],
      }}
    >
      {visible || isVisible ? props.children : null}
    </Animated.View>
  );
};

export default FadeAnimation;
