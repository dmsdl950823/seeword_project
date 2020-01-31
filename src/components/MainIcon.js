import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function MainIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.icons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  icons: {
    backgroundColor: "#D93970",
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 40,
  },
});

// borderTopColor: "red",
// borderLeftColor: "red",
// borderRightColor: "red",
// borderBottomColor: "red",
// borderWidth: 2,
