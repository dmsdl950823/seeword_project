import styled from "styled-components";

// AddWords()
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

// AddModePages()
const WholeWrap = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
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

const ColorSelects = styled.View`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 250px;
  width: 250px;
  border: 2px solid #9ba8dd;
  border-radius: 10px;
  position: absolute;
  top: 30%;
  left: 19%;
  elevation: 8;
  padding: 25px;
`;

const ColorBoundary = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 76%;
  width: 100%;
`;

const ColorType = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 50px;
  border: 2px solid #fff;
  border-radius: 50px;
  margin-bottom: 10px;
  elevation: 3;
`;

const GroupSelect = styled.View`
  background-color: #fff;
  width: 150px;
  height: 60px;
  margin-left: 40px;
  border: 2px solid #9ba8dd;
  border-radius: 10px;
  position: relative;
`;

const GroupListText = styled.Text`
  text-align: center;
  line-height: 55px;
  font-size: 24px;
  color: #bcbcbc;
`;

const GroupLists = styled.View`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  align-items: center;
  height: 300px;
  width: 250px;
  border: 2px solid #9ba8dd;
  border-radius: 10px;
  position: absolute;
  top: 30%;
  right: 20%;
  elevation: 8;
`;

const GroupScrolls = styled.ScrollView`
  width: 100%;
  height: 80%;
  margin-bottom: 20px;
`;

const GroupNames = styled.Text`
  color: #000;
  height: 50px;
  line-height: 50px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #bfcff7;
  text-align: center;
`;

const ConfirmButton = styled.TouchableOpacity`
  background-color: #4654a6;
  display: flex;
  height: 50px;
  width: 150px;
  elevation: 5;
  border-radius: 15px;
  align-items: center;
`;

const ConfirmText = styled.Text`
  color: #fff;
  font-size: 18px;
  line-height: 50px;
`;

const TopGroup = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-end;
  justify-content: center;
  flex: 2;
  flex-grow: 3;
`;

const Inputs = styled.TextInput`
  width: 70%;
  height: 50px;
  border-bottom-width: 2px;
  border-bottom-color: #9ba8dd;
  color: #888;
  font-size: 24px;
  text-align: center;
  margin-top: 35px;
`;

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

const Blur = styled.View`
  width: 100%;
  height: 80%;
  filter: blur(8px);
`;

export {
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
  ColorBoundary,
  ColorType,
  ConfirmButton,
  ConfirmText,
  GroupNames,
  GroupScrolls,
  Blur,
};
