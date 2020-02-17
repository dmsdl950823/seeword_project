import React, { Component } from "react";
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
import "react-native-gesture-handler";

import AddWords from "./src/navis/AddMode";
import MyLists from "./src/navis/MyLists";
import ReciteMode from "./src/navis/ReciteMode";

export default class App extends Component {
  render() {
    // return (
    //   <View style={styles.border}>
    //     <Main />
    //   </View>
    // );

    // return <AddWords />;
    // return <MyLists />;
     return <ReciteMode />;
  }
}

const styles = StyleSheet.create({
  border: {
    width: "100%",
    height: "100%",
    borderColor: "red",
  },
});
