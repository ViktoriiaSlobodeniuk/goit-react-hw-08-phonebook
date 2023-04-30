import { Menu, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Menu>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </Menu>
  );
};
