import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  /* flex: 1; */
  height: 100%;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  padding: 5px 5px;

  margin-top: 20px;
  background-color: #279dd1;

  border-radius: 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const IconContainer = styled(TouchableOpacity)`
  /* flex: 1; */
  /* flex-direction: row; */
  padding: 5px;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Row = styled(TouchableOpacity)`
  /* flex: 1; */
  margin: 10px 5px;
  flex-direction: row;

  align-items: center;
  /* justify-content: center; */
`;

export const TextContainer = styled.View`
  flex: 1;
  /* padding: 0 2px; */

  /* align-items: center; */
  justify-content: center;
  padding-left: 15px;
  /* padding-right: 30px; */
`;

export const ProfileContainer = styled.View`
  padding: 10px;
  flex-direction: row;
`;

export const ProfileInfo = styled.View`
  flex: 1;
  justify-content: center;
`;

export const PictureContainer = styled.View`
  padding: 10px;
`;

export const ProfilePic = styled.Image`
  width: 90px;
  height: 90px;

  border-radius: 50px;
  border-width: 2px;
  border-color: #fff;

  background-color: rgba(255, 255, 255, 0.9);
`;

export const Footer = styled.View`
  flex: 1;
  height: 100%;
  margin-top: 260px;
  align-content: flex-end;
  /* border: 1px solid red; */
`;
