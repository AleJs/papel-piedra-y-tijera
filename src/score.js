import React from "react";
import styled from "styled-components";

const ScoreStyle = styled.div`
  background: white;
  text-align: center;
  padding: 12px 12px 12px 23px;
  border-radius: 8px;
  width: 80px;
  small {
    color: #2a45c2;
    text-transform: uppercase;
    font-size: 12px;
  }
  p {
    color: #565468;
    font-size: 40px;
    margin: 0;
    font-weight: 700;
    /* letter-spacing: -2px;
    position:relative;
    left: -1.5px; */
  }
`;

function score() {
  return (
    <ScoreStyle>
      <small>Score</small>
      <p>12</p>
    </ScoreStyle>
  );
}

export default score;
