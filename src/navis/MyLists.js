import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MoreButton } from "./../events/More";
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

const ListContainer = styled.View`
  width: 100%;
  height: 70px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  position: relative;
  z-index: -2;
`;

const GroupName = styled.Text`
  line-height: 62px;
  font-size: 20px;
  width: 67%;
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

const SmallPopUp = styled.View`
  position: absolute;
  top: 55px;
  right: 25px;
  width: 120px;
  height: 45px;
  border: 3px solid #bfcff7;
  background: #e6f7ff;
  border-radius: 12px;
  z-index: 22;
  display: flex;
  flex-direction: row;
  opacity: 0;
`;

const HideBtn = `
  flex: 1
  height: 39px;
  font-size: 12px;
  text-align: center;
  line-height: 39px;
`;

const RmvButton = styled.Text`
  ${HideBtn}
  background: #E5E9F9;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
`;

const ModifButton = styled.Text`
  ${HideBtn}
  background: #FFE9F1;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
`;

function MyListsPage() {
  const data = [
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
  ];

  return (
    <View>
      <FlatList
        data={data}
        style={styles.item_box}
        renderItem={({ item }) => (
          <ListContainer>
            <Lists>
              <GroupName>{item.key}</GroupName>
              <MoreCont title="..." onPress={e => console.log(e.target)}>
                {/* <Ionicons name="dots-three-horizontal" /> */}
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={29}
                  color="#9BA8DD"
                />
              </MoreCont>

              <PlayBttn
                title="random play"
                onPress={() => console.log("play!")}>
                <Foundation
                  name="play"
                  size={26}
                  color="#4654A6"
                  style={{ marginLeft: 9, lineHeight: 30 }}
                />
              </PlayBttn>

              <SmallPopUp style={styles.Zindex}>
                <RmvButton>REVISE</RmvButton>
                <ModifButton>REMOVE</ModifButton>
              </SmallPopUp>
            </Lists>
          </ListContainer>
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
  Zindex: {
    zIndex: 33, // works on ios
  },
});

// export default MyLists;
export default MyListsPage;
