import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    font-size: x-large;
    color: #7b103b;
  }
`;
