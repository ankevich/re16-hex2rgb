import "./App.css";
import ColorRgb from "./ColorRgb";
import Form from "./Form";
import styled from "styled-components";
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#456389");
  const [isValidColor, setIsValidColor] = useState(true);
  const [formColor, setFormColor] = useState(color);


  const handlerChangeColor = (newColor) => {
    setFormColor(newColor);
    if (/^#[0-9A-F]{6}$/i.test(newColor)) {
      setColor(newColor);
      setIsValidColor(true);
    } else {
      setIsValidColor(false);
    }
  };

  return (
    <Background color={color}>
      <Form color={formColor} setColor={handlerChangeColor} />
      <ColorRgb color={color} isValidColor={isValidColor} />
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
  flex-direction: column;
`;

export default App;
