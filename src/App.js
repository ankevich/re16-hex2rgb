import "./App.css";
import Form from "./Form";
import styled from "styled-components";
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#456389");

  return (
    <Background color={color}>
      <Form color={color} setColor={setColor} />
    </Background>
  );
}

const Background = styled.div`
  background-color: ${(props) => props.color};
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export default App;
