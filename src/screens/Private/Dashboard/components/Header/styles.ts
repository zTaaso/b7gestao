import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex-direction: row;
  /* border: 1px solid red; */
  align-items: center;
  justify-content: space-between;
  /* padding: 5px 20px; */

  margin-top: ${Constants.statusBarHeight + 20}px;

  padding: 0 25px;
  padding-bottom: 10px;
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-width: 1px;
`;

export const IconContainer = styled.TouchableOpacity`
  /* flex: 1; */
  /* flex-direction: row; */
  /* border: 1px solid blue; */
  padding: 13px;
  border-radius: 40px;
  /* background-color: white; */
  border: 1px solid #30d88b;
`;

export const LogoContainer = styled.View`
  /* border: 1px solid red; */

  align-items: center;

  max-height: 100px;
  max-width: 100px;
`;

export const LogoImage = styled.Image`
  width: 110px;
  height: 70px;
`;
