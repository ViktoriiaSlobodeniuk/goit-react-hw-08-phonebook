import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding-top: 50px;
`;
export const Title = styled.h1`
  text-align: center;
  padding-bottom: 50px;
`;
export const StyledForm = styled.form`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-end;
`;
export const Button = styled.button`
  cursor: pointer;
  width: 80px;
  height: 30px;
  padding: 4px;
  border: none;
  border-radius: 50px;
  color: white;
  background: linear-gradient(145deg, #e63e81, #ff4a99);
  transition: height 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #7b103b;
  }
`;
export const Label = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 15px;
`;

export const Input = styled.input`
  border: none;
`;
