import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ColorValue } from 'react-native';

export interface CustomButtonTypes {
  bgColor?: ColorValue | string;
}

export const StyledButton = styled.TouchableOpacity<CustomButtonTypes>`
  align-items: center;
  padding: 15px 0px;
  margin: 5px 30px;

  border-radius: 25px;
  background-color: ${(props) => props.bgColor || 'white'};
`;

export const ButtonText = styled.Text`
  color: #279dd1;
  /* flex: 1; */
  font-size: 20px;
  text-transform: uppercase;
  font-family: 'Montserrat_Bold';
`;

export const StyledLinearGradient = styled(LinearGradient)`
  align-items: center;
  padding: 15px 0px;
  margin: 10px 30px;

  border-radius: 25px;
`;
