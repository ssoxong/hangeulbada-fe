import './App.css';
import Navbar from './components/navbar/Navbar';
import { IntroPage, MainPage, ClassListPage, ClassEnterPage } from './pages';
import StuSetListPage from './pages/StuSetListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styled from 'styled-components';

const BodyInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: gray;
`;
const WebAppContainer = styled.div`
    width: 100%;
    max-width: 500px;
    height: 100%;
    background-color: white;
`;

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <BodyInner>
                    <WebAppContainer>
                        <Navbar />
                        <Routes>
                            <Route exact path="/" element={<IntroPage />} />
                            <Route path="/main" element={<MainPage />} />
                            <Route path="/classList" element={<ClassListPage />} />
                            <Route path="/classEnter" element={<ClassEnterPage />} />
                            <Route path="/studentSet" element={<StuSetListPage />} />
                        </Routes>
                    </WebAppContainer>
                </BodyInner>
            </BrowserRouter>
        </div>
    );
}

export default App;
