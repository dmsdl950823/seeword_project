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
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  MaterialCommunityIcons,
  Foundation,
  Feather,
} from "@expo/vector-icons";

const Stack = createStackNavigator();

const GobackBttn = styled.TouchableOpacity`
  width: 15px;
  height: 15px;
  border-bottom-width: 2px;
  border-bottom-color: #fff;
  border-left-width: 2px;
  border-left-color: #fff;
  transform: rotate(45deg);
  margin-left: 20px;
`;

const SearchBttn = styled.TouchableOpacity`
  background-color: transparent;
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

function MyLists() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyLists"
          component={MyListsPage}
          options={{
            title: "My Lists",
            headerLeft: () => <GobackBttn title="back" />,
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor: "#4654A6",
            },
            headerTitleStyle: {
              // fontWeight: "bold",
            },
            headerRight: () => (
              <SearchBttn title="sbsb?">
                <Feather
                  name="search"
                  size={28}
                  color="#FFF"
                  style={
                    {
                      // lineHeight:
                    }
                  }
                />
              </SearchBttn>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ListsUl = styled.FlatList`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
// justify-content: center;

const Lists = styled.View`
  width: 80%;
  height: 70px;
  background-color: #fff;
  padding: 0 25px;
  border-radius: 15px;
  border: 3px solid #bfcff7;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const GroupName = styled.Text`
  line-height: 62px;
  font-size: 20px;
  width: 60%;
`;

const PlayBttn = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  text-align: left;
  border: 3px solid #bfcff7;
  border-radius: 50px;
  margin-left: 10px;
`;

const MoreCont = styled(PlayBttn)`
  margin-left: 12px;
`;

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
        style={styles.item_box}
        renderItem={({ item }) => (
          <Lists>
            <GroupName>{item.key}</GroupName>
            <MoreCont title="...">
              {/* <Ionicons name="dots-three-horizontal" /> */}
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={29}
                color="#9BA8DD"
              />
            </MoreCont>
            <PlayBttn title="random play">
              <Foundation
                name="play"
                size={26}
                color="#4654A6"
                style={{ marginLeft: 9, lineHeight: 30 }}
              />
            </PlayBttn>
          </Lists>
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
  item_box: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    // justifyContent: "center",
  },
  item_box2: { backgroundColor: "blue" },
});

export default MyLists;
