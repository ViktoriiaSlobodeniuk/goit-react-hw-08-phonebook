import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const Button = styled.button`
  cursor: pointer;
  width: 80px;
  margin-left: auto;
  padding: 4px;
  border: none;
  border-radius: 50px;
  color: white;
  background: linear-gradient(145deg, #e63e81, #ff4a99);
  transition: width 350ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 18px;

  &:hover {
    color: #7b103b;
  }
`;
