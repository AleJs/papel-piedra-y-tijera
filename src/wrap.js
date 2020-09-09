import React from "react";
import styled from "styled-components";

const WrapStyle = styled.div`
  max-width: 1024px;
  margin: auto;
`;
function wrap({ children }) {
  return <WrapStyle>{children}</WrapStyle>;
}

export default wrap;
