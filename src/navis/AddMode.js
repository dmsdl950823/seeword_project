import React from "react";
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
        <ColorSelect />

        <GroupSelect>
          <GroupListText>Group</GroupListText>
        </GroupSelect>
      </TopGroup>

      <InputWrap>
        <Inputs onChangeText={text => onChangeText(text)} placeholder="WORD" />
        <Inputs
          onChangeText={text => onChangeText(text)}
          placeholder="MEANING"
        />
        <Inputs onChangeText={text => onChangeText(text)} placeholder="TIP" />
      </InputWrap>

      <SubmitBtnWrap>
        <Buttons title="REGISTER">
          <ButtonText>REGISTER</ButtonText>
        </Buttons>
        <Buttons title="CANCLE">
          <ButtonText>CANCLE</ButtonText>
        </Buttons>
      </SubmitBtnWrap>
    </WholeWrap>
  );
}

// export default AddWords;
export default AddModePage;
