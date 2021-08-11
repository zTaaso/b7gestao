import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  /* flex: 1; */
  align-self: flex-end;
  /* max-height: 100px; */
  padding: 18px 15px;
  background-color: #30d88b;
  opacity: ${(props) => (props.disabled ? '0.7' : 1)};

  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
