import React from "react";
import { Text, View, Button } from "react-native";
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
  GroupLists,
  ColorSelects,
  ColorType,
  ConfirmButton,
  ColorBoundary,
  ConfirmText,
  GroupNames,
  GroupScrolls,
  Blur,
} from "./styles/AddMode_Styles";

const Stack = createStackNavigator();

// function AddModePage() {
class AddModePage extends React.Component {
  state = {
    group_shown: false,
    color_shown: false,
  };

  render() {
    return (
      <WholeWrap>
        <TopGroup>
          <ColorSelect onPress={() => this._colorListsShown()} />

          <GroupSelect>
            <GroupListText onPress={() => this._groupListsShown()}>
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

        <ButtonGroup />

        {this.state.group_shown ? <GroupList /> : null}
        {this.state.color_shown ? <ColorList /> : null}
        {/* <ColorList />
        <GroupList /> */}
      </WholeWrap>
    );
  }

  _groupListsShown() {
    console.log("Group!");
    if (this.state.group_shown) {
      this.setState({
        color_shown: false,
        group_shown: false,
      });
    } else {
      this.setState({
        group_shown: true,
        color_shown: false,
      });
    }
  }

  _colorListsShown() {
    console.log("Color!");
    console.log(this.state);
    if (this.state.color_shown) {
      this.setState({
        color_shown: false,
        group_shown: false,
      });
    } else {
      this.setState({
        color_shown: true,
        group_shown: false,
      });
    }
  }
}

function onChangeText(txt) {
  // console.log(txt);
}

function GroupList() {
  const groupName = ["group1", "group2", "group3", "group4", "group5"];
  return (
    <GroupLists
      style={{
        zIndex: 999,
      }}>
      <GroupScrolls>
        {groupName.map(grp => (
          <GroupNames>{grp}</GroupNames>
        ))}
      </GroupScrolls>

      <ConfirmButton onPress={console.log("ㅇㅇ")}>
        <ConfirmText>CONFIRM</ConfirmText>
      </ConfirmButton>
    </GroupLists>
  );
}

function ColorList() {
  const state = {
    color: "",
  };

  return (
    <ColorSelects>
      <ColorTypes />
      <ConfirmButton onPress={console.log("ㅇㅇ")}>
        <ConfirmText>CONFIRM</ConfirmText>
      </ConfirmButton>
    </ColorSelects>
  );
}

class ColorTypes extends React.Component {
  colors = ["#d92046", "pink", "yellow", "#2b2d33", "#7ab4a8", "#527eff"];
  render() {
    return (
      <ColorBoundary>
        {this.colors.map(color => (
          <ColorType
            style={{ backgroundColor: color }}
            selectdColor={color}
            onPress={console.log(color)}
          />
        ))}
      </ColorBoundary>
    );
  }
}

function ButtonGroup(nav) {
  console.log(nav);
  return (
    <SubmitBtnWrap>
      <Buttons title="REGISTER" onPress={() => console.log("Register!")}>
        <ButtonText>REGISTER</ButtonText>
      </Buttons>
      <Buttons title="CANCLE" onPress={() => console.log("Cancle!")}>
        <ButtonText>CANCLE</ButtonText>
      </Buttons>
    </SubmitBtnWrap>
  );
}

export default AddModePage;
