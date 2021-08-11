import styled from 'styled-components/native';

export const Container = styled.View`
  /* flex-direction: row; */
  border-bottom-width: 1px;
  border-bottom-color: #e63874;
  padding: 10px 10px;
`;

export const VisibleContent = styled.View`
  /* flex: 1; */
  flex-direction: row;
`;

export const ExtraContent = styled.View`
  /* flex: 1; */
  padding: 5px;
  /* flex-direction: row; */
`;

export const DateInfo = styled.View`
  flex: 0.3;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DateInfoColumn = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const Description = styled.View`
  flex: 0.4;

  /* padding: 0 5px; */

  align-items: center;
  justify-content: center;
`;

export const PriceInfo = styled.View`
  flex: 0.31;
  padding: 0 5px;
`;

export const IconContainer = styled.TouchableOpacity`
  /* flex: 0.1; */
  padding: 5px 5px;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
`;

export const CustomDay = styled.Text`
  padding: 5px 3px;
  border: 2px solid #e63874;
  border-radius: 20px;
  min-width: 35px;
  align-items: center;
  justify-content: center;

  color: #e63874;
  font-family: 'Montserrat_Bold';
  font-size: 15px;
  text-align: center;
`;
