/*
"jest": {
    "preset": "jest-expo-enzyme",
    "transform": {
      "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
    },
    "transformIgnorePatterns": [
      "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
      "^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$"
    ]
  },
*/
const { withEnzyme } = require("jest-expo-enzyme");

module.exports = {
  projects: [
    // Skipping Node because we want to test DOM presets only
    withEnzyme(require("jest-expo/ios/jest-preset")),
    withEnzyme(require("jest-expo/android/jest-preset")),
    // withEnzyme(require('jest-expo/web/jest-preset')),
  ],
  transform: {
    "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
    "^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$",
  ],
};
