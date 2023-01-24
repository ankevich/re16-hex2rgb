import React, { useState } from "react";
import styled from "styled-components";

const Form = () => {
  const [color, setColor] = useState("");
  const handlerChangeColor = (event) => {
    setColor(event.target.value);
  };
  return (
    <>
      <form>
        <input value={color} onChange={handlerChangeColor} />
      </form>
    </>
  );
};



export default Form;
