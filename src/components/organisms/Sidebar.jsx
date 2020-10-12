import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logoIcon from 'assets/icons/logo.svg';
import BulbIcon from 'assets/icons/bulb.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import PenIcon from 'assets/icons/pen.svg';
import TwitterIcon from 'assets/icons/twitter.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  padding: 25px 0;
  top: 0;
  left: 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = () => (
  <StyledWrapper>
    <StyledLogoLink to="/" />
    <StyledLinksList>
      <li><ButtonIcon as={NavLink} to="/" icon={PenIcon} /></li>
      <li><ButtonIcon as={NavLink} to="/twitters" icon={TwitterIcon} /></li>
      <li><ButtonIcon as={NavLink} to="/articles" icon={BulbIcon} /></li>
    </StyledLinksList>
    <StyledLogoutButton as={NavLink} to="/" icon={LogoutIcon} />
  </StyledWrapper>
);

export default Sidebar;
