import styled from 'styled-components/native';

export const Row = styled.View`
  /* flex: 1; */
  flex-direction: row;
  padding: 10px 5px;
  /* border: 1px solid white; */

  /* border: 1px solid red; */
`;

export const Container = styled.Pressable`
  /* flex: 1; */

  /* border: 1px solid white; */

  /* border: 1px solid red; */
`;

export const Picture = styled.Image`
  width: 38px;
  height: 38px;

  border-radius: 20px;
  border-width: 1px;
  border-color: white;
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
  padding: 0 5px;
`;

export const ExtraContent = styled.View`
  justify-content: center;

  padding: 15px;
  margin-bottom: 10px;

  border-bottom-color: rgba(255, 255, 255, 0.4);
  border-bottom-width: 1px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const RespondContainer = styled.TouchableOpacity`
  justify-content: center;
  flex-direction: row;

  /* padding: 15px; */
  margin: 15px 10px 0;
  /* margin-bottom: 10px; */
`;
