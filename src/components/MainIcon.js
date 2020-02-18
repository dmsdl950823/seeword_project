import React from "react";
import styled from "styled-components";

const IconContainer = styled.View`
  flex: 0.8;
  align-items: center;
  justify-content: flex-end;
`;

const IconBox = styled.View`
  background-color: #d93970;
  width: 140px;
  height: 140px;
  border-radius: 12px;
  display: flex;
`;

export default function MainIcon() {
  return (
    <IconContainer>
      <IconBox />
    </IconContainer>
  );
}
