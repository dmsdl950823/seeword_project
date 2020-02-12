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

function MyLists() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyLists"
          component={MyListsPage}
          options={{
            title: "My Lists",
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

function MyListsPage() {
  return (
    <View>
      <FlatList
        data={[
          { key: "Group1" },
          { key: "Group2" },
          { key: "Group3" },
          { key: "Group4" },
          { key: "Group5" },
          { key: "Group6" },
          { key: "Group7" },
          { key: "Group8" },
          { key: "Group9" },
          { key: "Group10" },
        ]}
        renderItem={({ item }) => (
          <View style={styles.sample}>
            <Text style={styles.item_box2}>{item.key}</Text>
            <View style={styles.item_box} title="..." />
            <TouchableOpacity style={styles.item_box} title="random play" />
          </View>
        )}
      />

      <View>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            display: "none",
          }}
          onChangeText={text => onChangeText(text)}
          placeholder="SEARCH"
        />

        <View>
          <TouchableOpacity title="SEARCH">
            <Text>SEARCH</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity title="CANCLE">
            <Text>CANCLE</Text>
          </TouchableOpacity>
        </View>
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

export default MyLists;
