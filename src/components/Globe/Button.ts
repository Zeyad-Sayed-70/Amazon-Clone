import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 16px;
  border-radius: 0 4px 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_orange};
  color: ${({ theme }) => theme.colors.primary_black};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary_yellow};
  }
`;
