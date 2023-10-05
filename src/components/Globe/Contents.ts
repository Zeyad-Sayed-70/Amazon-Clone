import styled from "styled-components";

export const C1 = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.primary_black};
`;

export const C2 = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.primary_black};
`;

export const C3 = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.primary_black};
`;
