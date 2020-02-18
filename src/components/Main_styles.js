import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";

// MainPage()

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

const ImgBack = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

// MainButtons()
const ButtonsContainer = styled.View`
  flex: 0.7;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
  margin-bottom: 60px;
`;

const MoveButton = styled.TouchableOpacity`
  width: 280px;
  height: 60px;
  background-color: #4654a6;
  border-radius: 15px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 60px;
`;

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    shadowColor: "#272559",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 6,
  },
});

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

export {
  Container,
  ImgBack,
  ButtonsContainer,
  MoveButton,
  ButtonText,
  styles,
  GobackBttn,
};
