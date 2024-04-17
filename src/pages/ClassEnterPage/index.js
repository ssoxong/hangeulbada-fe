import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import ContainedButton from '../../components/button/ContainedButton';

const ClassEnterPageLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    position: relative;
    //align-items: center;
    background-color: rgba(74, 190, 255, 0.25);
`;
const ClassListHeader = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    //justify-content: space-between;
    margin: 24px;
`;
const ClassListTitle = styled.div`
    display: flex;
    font-size: 24px;
    font-weight: 500;
`;

const ClassListSubTitle = styled.div`
    display: flex;
    margin: 2% 0;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const SyltedInput = styled.input`
    // background-color: yellow;
    border-radius: 20px;
    border-width: 0px;
    width: 50%;
    height: 100px;
    padding: 20px;
    font-size: 16px;
`;

const StyledLabel = styled.label`
    padding: 30px;
`;

const StyledDone = styled.button`
    appearance: none;
    background-color: 
// 값이 들어오면 파란색
        ${(props) => props.inputcheck};
    width: 150px;
    height: 60px;
    border-radius: 10px;
    border-color: white;
    margin: 0 180px;
    font-size: 20px;
    color: ${(props) => props.fontcolor};
`;

const ClassEnterPage = () => {
    const [classcode, setClasscode] = useState('');
    const [inputcheck, setInputcheck] = useState('white');
    const [fontcolor, setfontcolor] = useState('black');

    const handleChange = (e) => {
        setClasscode(e.target.value);
        setInputcheck('rgba(18, 127, 255)');
        setfontcolor('white');
    };

    const handleSubmit = (e) => {
        alert('입력한 코드: ' + classcode);
        e.preventDefault();
    };
    return (
        <div>
            <ClassEnterPageLayout>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledLabel>
                        {' '}
                        <SyltedInput
                            type="text"
                            placeholder="여기에 입력하세요."
                            name="classcode"
                            classcode={classcode}
                            onChange={handleChange}
                            inputcheck={inputcheck}
                        />
                    </StyledLabel>
                    <StyledDone fontcolor={fontcolor} inputcheck={inputcheck} type="submit">
                        완료
                    </StyledDone>
                </StyledForm>
            </ClassEnterPageLayout>
        </div>
    );
};

export default ClassEnterPage;
