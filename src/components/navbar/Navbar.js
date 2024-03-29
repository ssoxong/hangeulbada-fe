import React from 'react';
import styled from 'styled-components';

import { Logo1 } from '../../assets/icons';

import { NavLink } from 'react-router-dom';

const NavbarLayout = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: wheat;
`;

const LogoIcon = styled.img`
  
`

const Navbar = () => {
    return (
        <NavbarLayout>
          <NavLink to="/">
            <LogoIcon src={Logo1} />
          </NavLink>
          Nav Bar
        </NavbarLayout>
    );
};

export default Navbar;