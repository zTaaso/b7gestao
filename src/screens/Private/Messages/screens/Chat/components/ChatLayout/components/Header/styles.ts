import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex-direction: row;
  /* height: 100px; */
  align-items: center;

  margin-top: ${Constants.statusBarHeight + 15}px;
  padding-bottom: 5px;

  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.1);
`;

export const SettingsContainer = styled.TouchableOpacity`
  /* flex: 1; */
  align-items: center;
  padding: 5px 15px;
  /* flex-direction: row; */
`;

export const TextContainer = styled.View`
  flex: 1;

  /* flex-direction: row; */
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

export const PictureContainer = styled.View`
  padding: 5px 5px;
`;

export const IconsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 5px;

  /* border: 1px solid red; */
`;

export const Icon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 10px;

  margin-right: 10px;

  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
`;

export const ProfilePic = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 25px;
  border-width: 1px;
  /* border-color: rgba(0, 0, 0, 0.3); */
  border-color: #fff;
`;
