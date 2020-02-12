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

function AddWords() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AddWords"
          component={AddModePage}
          options={{
            title: "Add Words",
            headerLeft: () => (
              <Button
                onPress={() => alert("This is a button! You got plus 1!")}
                title="Info"
                color="red"
              />
            ),
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AddModePage() {
  return (
    <View>
      <View>
        <View style={styles.sample}>
          <Text>새믈</Text>
        </View>

        <View>
          <Text>Group</Text>
        </View>

        {/* <FlatList
        style={styles.item}
        data={[
          { key: "Group" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      /> */}
      </View>

      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          placeholder="WORD"
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          placeholder="MEANING"
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          placeholder="TIP"
        />
      </View>

      <View>
        <Button title="REGISTER" />
        <Button title="CANCLE" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sample: {
    backgroundColor: "red",
    width: 50,
    height: 50,
  },
  item: {
    width: 70,
    height: 50,
  },
  itemList: {
    width: 70,
    height: 500,
  },
});

export default AddWords;
