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

// **** styles
const WholeWrap = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const ColorSelect = styled.TouchableOpacity`
  background-color: linear-gradient(
    90deg,
    rgba(217, 32, 70, 1) 0%,
    rgba(217, 89, 112, 1) 50%
  );
  width: 60px;
  height: 60px;
  border: 3px solid white;
  border-radius: 50px;
  elevation: 8;
`;
// box-shadow: 1px 1px 1px 0.8;

const GroupSelect = styled.View`
  background-color: #fff;
  width: 150px;
  height: 60px;
  margin-left: 40px;
  border: 2px solid #9ba8dd;
  border-radius: 10px;
`;

const GroupListText = styled.Text`
  text-align: center;
  line-height: 55px;
  font-size: 24px;
  color: #bcbcbc;
`;

const TopGroup = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-end;
  justify-content: center;
  flex: 2;
`;

const Inputs = styled.TextInput`
  width: 70%;
  height: 50px;
  border-bottom-width: 2px;
  border-bottom-color: #9ba8dd;
  color: #bcbcbc;
  font-size: 24px;
  text-align: center;
  margin-top: 35px;
`;
// padding-bottom: px;

const InputWrap = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 6;
`;

const SubmitBtnWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex: 3;
`;
// border: 1px solid pink;

const Buttons = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  elevation: 2;
  background-color: #${props => (props.title === "REGISTER" ? "4654a6" : "d93970")};
  ${props => (props.title === "REGISTER" ? "margin-right: 10px;" : "")}
`;

const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
  line-height: 45px;
`;

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

export default AddWords;
