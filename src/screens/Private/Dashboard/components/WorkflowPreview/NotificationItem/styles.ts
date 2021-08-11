import styled from 'styled-components/native';

export const Container = styled.Pressable`
  /* flex: 1; */
  flex-direction: row;
  padding: 10px 5px;
  /* border: 1px solid white; */

  /* border: 1px solid red; */
`;

export const Picture = styled.Image`
  width: 38px;
  height: 38px;

  border-radius: 20px;
  border-width: 1px;
  border-color: #000;
`;

export const InfoContent = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0 5px;
  margin-left: 5px;
`;

export const MessageInfo = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const NonReadMsgs = styled.View`
  padding: 1px 5px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  background-color: #30d88b;
`;

export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 3px;
`;
