import React from "react";
import styled from "styled-components";

import "./App.css";
import Wrap from "./wrap.js";
import Header from "./header.js";
import Tablet from "./tablet";
import Rules from "./Rules"
const AppStyled = styled.main`
  /* background: #111f43; */
  background-image: radial-gradient(circle at top, #1f3757 200%, #131537 100%);
  .app-content{
  min-height: 100vh;
  padding: 2em;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing:border-box;
  }
`;
function App() {
  return (
    <AppStyled>
      <Wrap>
        <div className="app-content">
          <Header />
          <Tablet />
          <Rules/>
        </div>
      </Wrap>
    </AppStyled>
  );
}

export default App;
