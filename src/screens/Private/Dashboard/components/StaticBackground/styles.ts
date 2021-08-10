import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export interface BackGroundProps {
  disablePaddingBottom?: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled(LinearGradient)<BackGroundProps>`
  flex: 1;

  /* padding: 0px 25px 15px 25px; */
  ${(props) =>
    !props.disablePaddingBottom &&
    css`
      padding-bottom: 20px;
    `}
`;
