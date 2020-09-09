import React from "react";
import styled from "styled-components";

import "./App.css";
import Wrap from "./wrap.js";
import Header from "./header.js";
import Tablet from "./tablet"
const AppStyled = styled.main`
  /* background: #111f43; */
  min-height: 100vh;
  padding: 2em;
  background-image: radial-gradient(circle at top, #1f3757 200%, #131537 100%);
`;
function App() {
  return (
    <AppStyled>
      <Wrap>
        <Header />
      <Tablet />
      </Wrap>
    </AppStyled>
  );
}

export default App;
