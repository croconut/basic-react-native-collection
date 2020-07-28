::one-time run for adding navigation
::could just copy the package.json, jest.config.js and then rerun yarn install

@echo off
cmd /c "yarn add @react-navigation/native"
cmd /c "expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view"
pause