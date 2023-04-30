import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Button,
  Input,
  Label,
  StyledDiv,
  StyledForm,
  Title,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledDiv>
      <Title>To log in to your personal account, enter:</Title>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Log In</Button>
      </StyledForm>
    </StyledDiv>
  );
};
