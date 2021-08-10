import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding-right: 15px;
`;

export const PictureContainer = styled.View`
  padding: 15px;
`;

export const ProfilePic = styled.Image`
  width: 65px;
  height: 65px;

  border-radius: 50px;
  border-width: 2px;
  border-color: #279dd1;
`;

export const MessageInfo = styled.View`
  flex: 1;
  flex-direction: row;

  /* align-items: center; */
  border-bottom-color: #279dd1;
  border-bottom-width: 1px;
`;

export const ContentInfo = styled.View`
  flex: 1;

  padding: 10px 5px;

  justify-content: space-evenly;
`;

export const TimeInfo = styled.View`
  padding: 10px 0px;
  align-items: center;

  justify-content: space-evenly;
`;

export const NonReadMsgs = styled.View`
  padding: 2px 0;
  /* flex: 1; */
  align-items: center;
  justify-content: center;

  margin-top: 5px;
  min-width: 25px;
  border-radius: 15px;

  background-color: #279dd1;
`;
