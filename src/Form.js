import React, { useState } from "react";
import styled from "styled-components";

const Form = ({ setColor, color }) => {
  const handlerChangeColor = (event) => {
    setColor(event.target.value);
  };
  return (
    <StyledForm>
      <input value={color} onChange={handlerChangeColor} />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  input {
    width: 140px;
    height: 54px;
    border: 0;

    margin-bottom: 5px;
    padding: 0 20px;
    font-size: 16px;
    color: #000;
    background-color: #fff;
  }
`;

export default Form;
