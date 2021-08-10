import styled, { css } from 'styled-components/native';
import { TextProps } from 'react-native';

export interface StyledTextTypes extends TextProps {
  fontSize?: number | string;
  font?: 'Montserrat' | 'Montserrat_Bold' | 'Montserrat_Light' | 'GoodTimes';
  color?: string;
  underline?: boolean;
  uppercase?: boolean;
  textAlign?: string;
}

export const StyledText = styled.Text<StyledTextTypes>`
  color: ${(props) => props.color || '#000'};
  /* flex: 1; */
  text-align: ${(props) => props.textAlign || 'center'};
  font-size: ${(props) => props.fontSize || 20}px;
  font-family: ${(props) => props.font || 'Montserrat'};

  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `}

  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}
`;
