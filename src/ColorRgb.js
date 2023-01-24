import styled from "styled-components";

const ColorRgb = ({ color }) => {
  if (color.length !== 7 || color[0] !== "#") {
    return <Brick>Ошибка!</Brick>;
  }

  const rgb = color
    .replace("#", "")
    .match(/.{1,2}/g)
    .map((x) => parseInt(x, 16))
    .join(", ");

  return <Brick>rgb({rgb})</Brick>;
};

const Brick = styled.div`
  width: 140px;
  height: 54px;
  text-align: center;
  line-height: 54px;
  color: white;
  background-color: #000;
  opacity: 0.5;
  padding: 0 20px;
`;

export default ColorRgb;
