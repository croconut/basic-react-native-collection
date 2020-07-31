// color is first item, text color is second
// blueGray is the full material design colors for blue gray
export default {
  primary: {
    default: ["#006064", "#ffffff"],
    light: ["#428e92", "#000000"],
    dark: ["#00363a", "#ffffff"],
  },
  secondary: {
    default: ["#80cbc4", "#000000"],
    light: ["#b2fef7", "#000000"],
    dark: ["#4f9a94", "#000000"],
  },
  blueGray: {
    gray50: ["#ECEFF1", "#000000"],
    gray100: ["#CFD8DC", "#000000"],
    gray200: ["#B0BEC5", "#000000"],
    gray300: ["#90A4AE", "#000000"],
    gray400: ["#78909C", "#FFFFFF"],
    gray500: ["#607D8B", "#FFFFFF"],
    gray600: ["#546E7A", "#FFFFFF"],
    gray700: ["#455A64", "#FFFFFF"],
    gray800: ["#37474F", "#FFFFFF"],
    gray900: ["#263238", "#FFFFFF"],
  },
};

export const Dark = {
  dark: true,
  colors: {
    primary: "#efe7ff",
    background: "#FFFFFF",
    card: "#7c4dff",
    text: "#FFFFFF",
    border: "#ede7f6",
    notification: "#5c6bc0",
    textSecondary: "#EBEBEB",
    backgroundSecondary: "#1a237e",
  },
};

export const Light = {
  dark: false,
  colors: {
    primary: "#ffffff",
    background: "#FFFFFF",
    card: "#7C4DFF",
    text: "#FFFFFF",
    border: "#455A64",
    notification: "#FF4DD0",
    textSecondary: "#162228",
    backgroundSecondary: "#FFFFFF",
  },
};
