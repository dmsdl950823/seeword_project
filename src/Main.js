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

import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class Main extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AddWords"
            component={AddModePage}
            options={this._options}
          />
          <Stack.Screen
            name="MyLists"
            component={MyListsPage}
            options={this._options}
          />
          <Stack.Screen
            name="Recite"
            component={RecitePage}
            options={this._options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  _options() {
    return {
      headerTintColor: "#FFF",
      headerStyle: {
        backgroundColor: "#4654A6",
      },
    };
  }
}

function MainPage({ navigation }) {
  return (
    <Container>
      <ImgBack source={require("./../assets/back.png")}>
        <MainIcon />

        <MainButtons navigation={navigation} poster="poster" />
      </ImgBack>
    </Container>
  );
}

function MainButtons(nav) {
  // console.log(nav.navigation);
  const currPage = {
    page: "main",
  };

  return (
    <ButtonsContainer>
      <View style={styles.shadow}>
        <MoveButton
          onPress={() =>
            // param
            nav.navigation.navigate("AddWords", { page: currPage.page })
          }>
          <ButtonText>ADD WORDS</ButtonText>
        </MoveButton>
      </View>
      <View style={styles.shadow}>
        <MoveButton onPress={() => nav.navigation.navigate("Recite")}>
          <ButtonText>RECITE MODE</ButtonText>
        </MoveButton>
      </View>
      <View style={styles.shadow}>
        <MoveButton onPress={() => nav.navigation.navigate("MyLists")}>
          <ButtonText>MY LISTS</ButtonText>
        </MoveButton>
      </View>
    </ButtonsContainer>
  );
}
