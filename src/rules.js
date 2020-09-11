import React, { useState } from "react";
import styled from "styled-components";
import Button from "./button";
const RulesStyle = styled.div`
  text-align: center;
  .rules-modal {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: 2;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 4em 0;
    h2 {
      color: #3b4262;
      text-transform: uppercase;
      /* font-family:Arial; */
      font-weight: 700;
      margin-bottom: 3px;
    }
  }
  .close-button {
    margin-top: 2em;
  }
`;
function Rules() {
  const [visible, setVisible] = useState(false);
  function handleClick() {
    console.log("pikachu");
    setVisible(!visible);
  }
  return (
    <RulesStyle>
      {visible && (
        <div className="rules-modal">
          <h2>Rules</h2>
          <img src={require(`./images/image-rules.svg`)} />
          <img
            className="close-button"
            onClick={handleClick}
            src={require(`./images/icon-close.svg`)}
          />
        </div>
      )}
      <Button onClick={handleClick} />
    </RulesStyle>
  );
}

export default Rules;
