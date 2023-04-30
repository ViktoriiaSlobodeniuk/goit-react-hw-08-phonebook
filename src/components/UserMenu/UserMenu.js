import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Menu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Menu>
      <p>Welcome, {user.email}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </Button>
    </Menu>
  );
};
