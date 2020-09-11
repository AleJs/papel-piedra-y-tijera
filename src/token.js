import React from "react";
import styled from "styled-components";

const TokenStyle = styled.div`
  width: 130px;
  height: 125px;
  border: 12px solid ${({color}) => color.base};
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  background-color: white;
  box-shadow: 0px 5px 0px ${({color}) => color.border};
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
  .box {
    box-shadow: 0px -3px 0px #bcc1d5;
    flex: 1;
    border-radius: 50%;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  position:relative;
  z-index:2;
`;

const color = {
  paper: {
    base: "#516ef4",
    border: "#2543c3",
  },
  rock: {
    base: "#de3a5a",
    border: "#980e31",
  },
  scissors: {
    base: "#eca81e",
    border: "#c76c14",
  },
};
function Token({ name }) {
  return (
    <TokenStyle color={color[name]}>
      <div className="box">
        <img src={require(`./images/icon-${name}.svg`)} alt={name} />
      </div>
    </TokenStyle>
  );
}

export default Token;
