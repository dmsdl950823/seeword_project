import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  GobackBttn,
  WholeWrap,
  ColorSelect,
  GroupSelect,
  GroupListText,
  TopGroup,
  Inputs,
  InputWrap,
  SubmitBtnWrap,
  Buttons,
  ButtonText,
} from "./styles/AddMode_Styles";
import { ScrollView } from "react-native-gesture-handler";

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
            headerLeft: () => <GobackBttn onPress={() => alert("ㄴㄱㅈㅁ")} />,
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor: "#4654A6",
            },
            headerTitleStyle: {
              // fontWeight: "bold",
            },
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AddModePage() {
  return (
    <WholeWrap>
      <TopGroup>
        <ColorSelect onPress={() => console.log("Color!")} />

        <GroupSelect>
          <GroupListText onPress={() => console.log("Group!")}>
            Group
          </GroupListText>
        </GroupSelect>
      </TopGroup>

      <InputWrap>
        <Inputs
          onChangeText={text => onChangeText(text)}
          placeholder="WORD"
          placeholderTextColor="#bcbcbc"
        />
        <Inputs
          onChangeText={text => onChangeText(text)}
          placeholder="MEANING"
          placeholderTextColor="#bcbcbc"
        />
        <Inputs
          onChangeText={text => onChangeText(text)}
          placeholder="TIP"
          placeholderTextColor="#bcbcbc"
        />
      </InputWrap>

      <SubmitBtnWrap>
        <Buttons title="REGISTER" onPress={() => console.log("Register!")}>
          <ButtonText>REGISTER</ButtonText>
        </Buttons>
        <Buttons title="CANCLE" onPress={() => console.log("Cancle!")}>
          <ButtonText>CANCLE</ButtonText>
        </Buttons>
      </SubmitBtnWrap>
    </WholeWrap>
  );
}

function onChangeText(txt) {
  // console.log(txt);
}

// export default AddWords;
export default AddModePage;
