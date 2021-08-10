import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const IconContainer = styled.View`
  flex: 1;
  /* border: 1px solid red; */

  justify-content: center;
  align-items: center;
`;

export const StyledLinearGradient = styled(LinearGradient)`
  /* align-items: center; */
  padding: 20px;
  /* margin: 10px 30px; */

  border-radius: 60px;
`;
