import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const SimpleButton = styled.button`
color:white;
background-color:green;
`;
const LargeButton = styled(SimpleButton)`
  font-size:50px;
  `;
  const ReactButton = props => {
    console.log('props', props);
    return <button className={props.className}>{props.children}</button>
  }
  const ReactLargeButton = styled(ReactButton)`
    font-size:50px;
  `;
function App() {
  return (
    <div>
     <SimpleButton>Simple</SimpleButton>
     <LargeButton>Large</LargeButton>
     <ReactButton>React</ReactButton>
     <ReactLargeButton>React Large</ReactLargeButton>
    </div>
  );
}

export default App;
