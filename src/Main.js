import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styled, { injectGlobal } from "styled-components";
import MainButtons from "./components/MainButtons";
import MainIcon from "./components/MainIcon";

export default function Main() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("./../assets/back.png")}>
        <MainIcon />

        <MainButtons />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D93970",
    width: 120,
    height: 120,
    borderRadius: 20,
    marginBottom: 30,
  },
});
