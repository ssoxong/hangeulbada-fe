import './App.css';

import styled from "styled-components";

const BodyInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: gray;
`
const WebAppContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  background-color: white;
`;

function App() {
  return (
    <div className="App">
      <BodyInner>
        <WebAppContainer>
          Body
        </WebAppContainer>
      </BodyInner>
    </div>
  );
}

export default App;
