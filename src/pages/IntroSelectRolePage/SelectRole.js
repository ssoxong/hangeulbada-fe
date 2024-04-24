import React from 'react';
import styled from 'styled-components';
import ContainedButton from '../../components/button/ContainedButton';

const StyledRoleLayout = styled.div`
    display: flex;
    padding: 20px 100px;
`;
const StyledRoleBox = styled.button`
    height: 120px;
    width: 150px;
    margin: 15px;
    border-radius: 10px;
    // border-width: 1px;
    border-color: transparent;
    transition: background 0.4s;
    box-shadow: 2px 2px 5px black;

    &:hover {
        border-color: #127fff;
        color: white;
        background-color: #127fff;
    }

    // &:focus {
    //     outline: none;
    // }
`;
const SelectRole = () => {
    return (
        <div>
            <StyledRoleLayout>
                <StyledRoleBox>
                    선생님 <br /> 또는 <br />
                    학부모
                </StyledRoleBox>
                <StyledRoleBox>
                    학생
                    <br /> 또는
                    <br /> 자녀
                </StyledRoleBox>
            </StyledRoleLayout>
            <ContainedButton btnType="secondary" size="mid" text="확인"></ContainedButton>
        </div>
    );
};

export default SelectRole;
