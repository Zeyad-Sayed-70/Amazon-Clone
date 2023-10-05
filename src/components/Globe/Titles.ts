import styled from "styled-components";

export const T1 = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.primary_black};
`;

export const T2 = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.primary_black};
`;

export const T3 = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.primary_black};
`;

export const T4 = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.primary_black};
`;
