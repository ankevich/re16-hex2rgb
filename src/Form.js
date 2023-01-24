import React, { useState } from "react";

const Form = ({setColor, color}) => {
  const handlerChangeColor = (event) => {
    setColor(event.target.value);
  };
  return (
    <>
      <form>
        <input value = {color} onChange={handlerChangeColor} />
      </form>
    </>
  );
};


export default Form;
