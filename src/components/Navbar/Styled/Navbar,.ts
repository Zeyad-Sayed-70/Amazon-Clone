import styled from "styled-components";

export const Nav = styled.nav`
  padding: 8px 0;
  background-color: ${({ theme }) => theme.colors.secondary_darkBlack};
  color: ${({ theme }) => theme.colors.primary_white};
`;

export const Box = styled.div`
  padding: 4px;
  &:hover {
    box-shadow: inset 0 0 0 1px #ffffff;
  }
`;

export const Logo = styled.img`
  object-fit: contain;
  width: 100px;
  max-height: 120px;
`;

export const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 6px;

  svg {
    color: ${({ theme }) => theme.colors.primary_white};
    font-size: 1.2em;
  }
`;
