import styled from "styled-components";
import { Box } from "@/components/Navbar/Styled/Navbar,";

export const Nav = styled.nav`
  padding: 2px 0;
  background-color: ${({ theme }) => theme.colors.secondary_medium};
  color: ${({ theme }) => theme.colors.primary_white};
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const List = styled(Box)`
  cursor: pointer;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 400;

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 4px;

    svg {
      font-size: 1rem;
    }
  }
`;

export const DrawerLoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  width: 100%;
  font-weight: 700;
  font-size: 1.2rem;
  text-align: start;
  background-color: ${({ theme }) => theme.colors.secondary_medium};
  color: ${({ theme }) => theme.colors.primary_white};

  svg {
    font-size: 1.75rem;
  }
`;

export const DrawerUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const DrawerList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.grey_disabled};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_original};
  }
`;
