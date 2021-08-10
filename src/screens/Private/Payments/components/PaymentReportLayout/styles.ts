import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* padding: 10px; */
`;

export const Row = styled.Pressable`
  flex-direction: row;
  padding: 6px 0px;
`;

export const TypeColumn = styled.View`
  flex-direction: column;
  flex: 0.2;
`;

export const DateColumn = styled.View`
  flex-direction: column;
  flex: 0.2;
`;

export const SourceColumn = styled.View`
  flex-direction: column;
  flex: 0.5;
`;

export const ValueColumn = styled.View`
  flex-direction: column;
  flex: 0.3;
`;

export const ShowAllContainer = styled.TouchableOpacity`
  /* flex-direction: column; */
  /* flex: 0.3; */
  /* border: 1px solid red; */
  margin-top: 10px;
`;

export const IconContainer = styled.View`
  /* flex-direction: column; */
  /* flex: 0.3; */
  padding-left: 10px;
  /* margin-top: 10px; */
`;
