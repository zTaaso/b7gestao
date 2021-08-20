import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { css } from 'styled-components';

export const Container = styled.View`
  background-color: #000;

  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-width: 1px;
`;

export const EntityContainer = styled.View`
  /* flex: 1; */

  flex-direction: row;
`;

export const EntityBlock = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  padding: 20px;

  ${(props: { hasBorderLeft?: boolean }) =>
    props.hasBorderLeft &&
    css`
      border-left-color: rgba(255, 255, 255, 0.2);
      border-left-width: 1px;
    `}
`;

export const EntityIconContainer = styled.View`
  padding: 0 10px;
`;

export const CartContainer = styled.View`
  /* flex: 1; */
  flex-direction: row;
  padding: 15px 0;
`;

export const CartInfo = styled.TouchableOpacity`
  flex-direction: row;
  flex: 0.9;
`;

export const ChargeButtonContainer = styled.View``;

export const ChargeButton = styled(RectButton)`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: #30d88b;
  padding: 0px 50px;
  border-radius: 10px;
`;

export const CartIconContainer = styled.View`
  padding: 0 8px;

  align-items: center;
  justify-content: center;
`;

export const CartTextInfo = styled.View`
  padding: 0 10px;
`;
