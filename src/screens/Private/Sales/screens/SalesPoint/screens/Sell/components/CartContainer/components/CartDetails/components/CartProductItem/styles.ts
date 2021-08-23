import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 3px;

  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-width: 1px;
`;

export const RightContent = styled.View`
  flex: 0.5;

  padding: 5px;

  flex-direction: row;
  /* border: 1px solid green; */

  justify-content: space-around;
  align-items: center;
`;

export const LeftContent = styled.View`
  flex: 0.5;
  flex-direction: row;

  padding: 5px;

  align-items: center;
  /* justify-content: flex-start; */
`;

export const DeleteIcon = styled.TouchableOpacity`
  /* border: 1px solid green; */
  border-radius: 20px;
  padding: 5px;

  /* align-items: center; */
  justify-content: center;
`;
