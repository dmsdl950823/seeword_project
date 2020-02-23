import React from "react";
import { View, Button } from "react-native";

import MainIcon from "./components/MainIcon";
import AddModePage from "./navis/AddMode";
import MyListsPage from "./navis/MyLists";
import RecitePage from "./navis/ReciteMode";
import {
  Container,
  ImgBack,
  ButtonsContainer,
  MoveButton,
  ButtonText,
  styles,
  GobackBttn,
} from "./components/Main_styles";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class Main extends React.Component {
  state = {
    page: "main",
    // page: "other",
  };
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: this._pageState(),
            headerLeft: () => (
              <GobackBttn
                onPress={() => {
                  // navigation.goBack();
                  alert("ㄴㄱㅈㅁ");
                }}
              />
            ),
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor: "#4654A6",
            },
            headerTitleStyle: {
              // fontWeight: "bold",
            },
          }}
          options={{
            title: "Main",
          }}>
          <Stack.Screen name="Main" component={MainPage} />
          <Stack.Screen name="AddWords" component={AddModePage} />
          <Stack.Screen name="MyLists" component={MyListsPage} />
          <Stack.Screen name="Recite" component={RecitePage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  _pageState() {
    console.log(this.state.page);
    if (this.state.page === "main") {
      return false;
    } else {
      return true;
    }
  }
}

function MainPage({ navigation }) {
  return (
    <Container>
      <ImgBack source={require("./../assets/back.png")}>
        <MainIcon />

        <MainButtons navigation={navigation} poster="poster" />
        {/* <Button
            title="example"
            onPress={() => {
              navigation.navigate("AddWords");
            }}
          /> */}
      </ImgBack>
    </Container>
  );
}

function MainButtons(nav, { toto }) {
  // console.log(nav.navigation);
  console.log(toto);
  console.log("scare....");
  return (
    <ButtonsContainer>
      <View style={styles.shadow}>
        <MoveButton
          onPress={() => {
            nav.navigation.navigate("AddWords");
            console.log(this);
          }}>
          <ButtonText>ADD WORDS</ButtonText>
        </MoveButton>
      </View>
      <View style={styles.shadow}>
        <MoveButton onPress={() => nav.navigation.navigate("MyLists")}>
          <ButtonText>RECITE MODE</ButtonText>
        </MoveButton>
      </View>
      <View style={styles.shadow}>
        <MoveButton onPress={() => nav.navigation.navigate("Recite")}>
          <ButtonText>MY LISTS</ButtonText>
        </MoveButton>
      </View>
    </ButtonsContainer>
  );
}
