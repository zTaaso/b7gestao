import styled, { css } from 'styled-components/native';

export const Container = styled.Pressable`
  /* flex: 1; */
  padding: 5px 10px;
  align-items: ${(props) => props.alignItems};
  justify-content: flex-start;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: rgba(0, 0, 0, 0.1);
    `}
`;

export const MessageContent = styled.View`
  /* flex: 1; */
  flex: none;
  max-width: 95%;

  /* border: 1px solid blue; */

  background-color: ${(props) => props.bgColor};
  border-radius: 15px;
  padding: 5px 10px;
`;

export const MessageBody = styled.View`
  flex: none;
  /* border: 1px solid green; */
  padding: 5px 10px;
`;

export const MessageDate = styled.View`
  /* flex: none; */
  /* border: 1px solid green; */
  align-items: flex-end;
  /* padding: 10px 10px; */
`;
