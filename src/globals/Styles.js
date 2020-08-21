import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import FontScalar from '../responsive/FontScalar';
import Colors from './Colors';

export default StyleSheet.create({
  screen: {
    height: "100%",
    marginTop: Constants.statusBarHeight,
    backgroundColor: Colors.primary.dark[0],
    color: Colors.primary.dark[1],
    alignItems: 'center',
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