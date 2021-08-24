import styled, { css } from 'styled-components/native';
import Constants from 'expo-constants';

interface TextContainerProps {
  hasPaddingRight: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  /* border: 1px solid red; */
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-width: 1px;
  /* align-items: center; */

  min-height: 60px;
  margin-top: ${Constants.statusBarHeight + 15}px;
  padding-bottom: 5px;

  background-color: #1a1f24;
`;

export const IconContainer = styled.TouchableOpacity`
  /* flex: 1; */
  /* flex-direction: row; */
  /* border: 1px solid blue; */
`;

export const TextContainer = styled.View<TextContainerProps>`
  flex: 1;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.hasPaddingRight &&
    css`
      padding-right: 50px;
    `}
`;
