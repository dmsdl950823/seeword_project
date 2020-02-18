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
import styled from "styled-components";
import {
  Feather,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  AnimatedGaugeProgress,
  GaugeProgress,
} from "react-native-simple-gauge";

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

function ReciteMode() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ReciteMode"
          component={RecitePage}
          options={{
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
                <Feather name="search" size={28} color="#FFF" />
              </SearchBttn>
            ),
            title: "Recite Mode",
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Whole = styled.View`
  display: flex;
  flex: 1;
`;

const ShowWord = styled.View`
  display: flex;
  flex: 0.8;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
`;

const MoveButtons = styled.TouchableOpacity`
  text-align: center;
  display: flex;
`;

const WordText = styled.Text`
  display: flex;
  flex: 1;
  text-align: center;
  font-size: 30px;
  color: #2e86ff;
  height: 43px;
  line-height: 43px;
`;

const Supplements = styled.View`
  display: flex;
  flex: 0.4;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-bottom: 25px;
  width: 100%;
`;

const ButtonsBasic = `
width: 40px;
height: 40px;
`;

const RandomButton = styled.TouchableOpacity`
  ${ButtonsBasic}
`;

const LeftLengthWrap = styled.View`
  ${ButtonsBasic}
`;

const LeftLength = styled.Text`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 32px;
  height: 32px;
  border-radius: 50px;
  line-height: 30px;
  text-align: center;
  font-size: 15px;
  color: #4654a6;
  border: 1px solid #d9e6ff;
`;

const HintWrap = styled.View`
  display: flex;
  flex: 0.7;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const HintBox = styled.TouchableOpacity`
  display: flex;
  width: 250px;
  background-color: #d9e6ff;
  height: 90px;
  border-radius: 15px;
`;

function RecitePage() {
  return (
    <Whole>
      <ShowWord>
        <MoveButtons>
          <Entypo name="chevron-thin-left" size={43} color="#BFCFF7" />
        </MoveButtons>
        <WordText>SAMPLE WORD</WordText>
        <MoveButtons>
          <Entypo name="chevron-thin-right" size={43} color="#BFCFF7" />
        </MoveButtons>
      </ShowWord>

      <Supplements>
        <RandomButton>
          <FontAwesome
            name="random"
            size={30}
            color="#4654A6"
            style={{ textAlign: "center", lineHeight: 40 }}
          />
        </RandomButton>
        <LeftLengthWrap style={{ position: "relative" }}>
          <AnimatedGaugeProgress
            size={40}
            width={2}
            fill={70}
            rotation={-90}
            cropDegree={0}
            tintColor="#D95970"
            backgroundColor="#FFF"
            delay={0}
            stroke={[2, 2]} //For a equaly dashed line
            strokeCap="circle"
            style={{ position: "absolute" }}
          />
          <LeftLength>56</LeftLength>
        </LeftLengthWrap>
      </Supplements>

      <HintWrap>
        <HintBox>
          <MaterialIcons
            name="lightbulb-outline"
            size={40}
            color="#FFF"
            style={{
              textAlign: "center",
              lineHeight: 90,
            }}
          />
        </HintBox>
      </HintWrap>
    </Whole>
  );
}

// export default ReciteMode;
export default RecitePage;
