import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
export const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: blueviolet;
  }
`;
