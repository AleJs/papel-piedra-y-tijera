import React from "react";
import styled from "styled-components";
import Score from "./score";
const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid rgba(255, 255, 255, 0.29);
  font-family: "Barlow Semi Condensed", sans-serif;
  color: white;
  padding: 23px;
  border-radius: 0.5em;

  h1 {
    font-size: 21px;
    text-transform: uppercase;
    line-height: 19px;
    font-weight: 700;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>
        Papel <br /> Piedra <br /> Tijera
      </h1>
      <Score />
    </HeaderStyled>
  );
}

export default Header;
