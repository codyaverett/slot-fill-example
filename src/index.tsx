import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import styled from "styled-components";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const NavBar = styled.div`
  background-color: black;
  width: 100vh;
  height: 80px;
`;

const App = () => (
  <div style={styles}>
    <NavBar />

    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
