import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex-direction: row;
  /* border: 1px solid red; */
  /* border-bottom-color: white; */
  /* border-bottom-width: 1px; */
  /* align-items: center; */

  margin-top: ${Constants.statusBarHeight + 15}px;
  padding-bottom: 5px;
`;

export const IconContainer = styled.TouchableOpacity`
  /* flex: 1; */
  /* flex-direction: row; */
  /* border: 1px solid blue; */
`;

export const TextContainer = styled.View`
  flex: 1;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
  padding-right: 50px;
`;
