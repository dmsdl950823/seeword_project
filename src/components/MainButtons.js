import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AddWords } from "../navis/AddMode";

export default function MainButtons() {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <TouchableOpacity style={styles.moveBtn} title="ADD WORDS">
          <Text style={styles.color}>ADD WORDS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.shadow}>
        <TouchableOpacity style={styles.moveBtn} title="RECITE MODE">
          <Text style={styles.color}>RECITE MODE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.shadow}>
        <TouchableOpacity style={styles.moveBtn} title="MY LISTS">
          <Text style={styles.color}>MY LISTS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.35,
    alignItems: "center",
    justifyContent: "space-between",
  },
  moveBtn: {
    width: 280,
    height: 60,
    backgroundColor: "#4654A6",
    borderRadius: 15,
    // marginTop: 20,
  },
  color: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    lineHeight: 60,
    // fontFamily: "noway_roundregular",
  },
  shadow: {
    backgroundColor: "white",
    borderRadius: 15,
    margin: 0,
    padding: 0,
    flex: 0,
    shadowColor: "#272559",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 6,
  },
});
