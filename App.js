import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { Styled } from "styled-components";
import Main from "./src/Main";

export default function App() {
  return (
    <View style={styles.border}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    width: "100%",
    height: "100%",
    borderColor: "red",
  },
});
