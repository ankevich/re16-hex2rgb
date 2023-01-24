import './App.css';
import Form from './Form';
import styled from 'styled-components';

function App() {
  return (
    <Background color = "#000">
    <Form/>
    </Background>
  );
}
 
const Background = styled.div`
background-color: ${props => props.color};
align-items: center;
display: flex;
height: 100vh;
justify-content: center;
width: 100vw;
`

export default App;
