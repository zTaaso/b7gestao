import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  /* border: 1px solid red; */
  /* opacity: 1; */
  /* min-width: 100px; */
`;

interface LogoSymbolTextTypes {
  rotate?: boolean;
}

export const LogoSymbolText = styled.Text<LogoSymbolTextTypes>`
  font-size: 100px;

  /* line-height: 100px; */

  font-family: 'GoodTimes';
  color: #fff;
`;

export const LogoLetters = styled.View`
  flex-direction: row;
  /* border: 1px solid blue; */
`;

export const LogoText = styled.Text`
  font-family: 'Montserrat';
  font-size: 30px;
  letter-spacing: 2px;
  color: white;
  text-transform: uppercase;
`;
