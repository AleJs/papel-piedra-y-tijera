import React from "react";
import styled from "styled-components";
import Token from "./token";

const TabletStyle = styled.div`
  display: grid;
  grid-grid-template-columns: 130px 130px;
  justify-content:center;
  justify-items: center;
  grid-gap: 30px 50px;
  & div:nth-of-type(3){
    grid-column:span 2;
  }
    position:relative;
  margin: 2em 0;
  .line{
    position:absolute;
    height:12px;
    background:rgba(0,0,0,.3);
   
    top:58px;
   
    width: 200px;
    &:after{
      content:"";
      position:absolute;
    height:12px;
    background:rgba(0,0,0,.3);
    left:0px;
    top:0px;
    right:0px;
  
    transform: rotate(-60deg);
    transform-origin: right top;
    }
    &:before{
      content:"";
      position:absolute;
    height:12px;
    background:rgba(0,0,0,.3);
    left:0px;
    top:0px;
    right:0px;
  
    transform: rotate(60deg);
    transform-origin: left top;
    }

  }
`;

function tablet() {
  return (
    <TabletStyle>
      <span className="line">"line"</span>
      <Token name="rock" />
      <Token name="scissors" />
      <Token name="paper" />
    </TabletStyle>
  );
}

export default tablet;
