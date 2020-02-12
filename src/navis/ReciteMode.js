import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  FlatList,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function ReciteMode() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ReciteMode"
          component={RecitePage}
          options={{
            title: "Recite Mode",
            headerLeft: () => (
              <Button
                onPress={() => alert("아아아")}
                title="Info"
                color="red"
              />
            ),
            headerRight: () => <Button title="sbsb?" />,
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function RecitePage() {
  return (
    <View>
      <View>
        <TouchableOpacity title=">" />
        <Text>SAMPLE WORD</Text>
        <TouchableOpacity title="<" />
      </View>

      <View>
        <TouchableOpacity />
        <TouchableOpacity />
      </View>

      <View>
        <Text>Hint</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sample: {
    backgroundColor: "pink",
    width: 250,
    height: 50,
  },
  item_box: {
    width: 70,
    height: 50,
    backgroundColor: "red",
  },
  item_box2: { backgroundColor: "blue" },
});

export default ReciteMode;
