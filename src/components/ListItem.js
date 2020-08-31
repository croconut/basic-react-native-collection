import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { List } from "react-native-paper";
import Styles from "../globals/Styles";
import FadeAnimation from "./FadeAnimation";

const MIN_LINES = 1;
const MAX_LINES = 1000;
const FADE_TIME = 300;

const ListItem = ({ item, remove, edit }) => {
  const [lineCount, setLineCount] = useState(MIN_LINES);
  const [delayedLineCount, setDelayedLineCount] = useState(MIN_LINES);

  const changeLineNumber = () => {
    setLineCount(lineCount === MIN_LINES ? MAX_LINES : MIN_LINES);
  };

  const startDelayedChange = () => {
    setDelayedLineCount(lineCount);
  };

  return (
    <TouchableOpacity onPress={changeLineNumber}>
      <List.Item
        title={item.note.title}
        description={item.note.body}
        left={(props) => (
          <FadeAnimation
            visible={lineCount === MIN_LINES}
            fadeTime={FADE_TIME}
            callback={startDelayedChange}
          >
            <List.Icon {...props} icon="unfold-more-horizontal" />
          </FadeAnimation>
        )}
        right={(props) => (
          <View style={{ flexDirection: "row", }}>
            <FadeAnimation
              visible={lineCount === MIN_LINES}
              fadeTime={FADE_TIME}
            >
              <TouchableOpacity
                onPress={() => remove(item.note.title, item.id)}
              >
                <List.Icon {...props} icon="trash-can-outline" />
              </TouchableOpacity>
            </FadeAnimation>
            <FadeAnimation
              visible={lineCount !== MIN_LINES}
              fadeTime={FADE_TIME}
            >
              <TouchableOpacity onPress={() => edit(item.note, item.id)}>
                <List.Icon {...props} icon="square-edit-outline" />
              </TouchableOpacity>
            </FadeAnimation>
          </View>
        )}
        descriptionNumberOfLines={delayedLineCount}
        titleStyle={Styles.title}
        descriptionStyle={Styles.basicText}
      />
    </TouchableOpacity>
  );
};

export default ListItem;
