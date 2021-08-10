import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  /* border: 1px solid red; */
  justify-content: space-around;
  /* padding: 5px 5px; */

  margin: 0 25px;

  margin-top: 15px;
  background-color: white;
  border-radius: 10px;

  /* margin: 30px 20px 0; */
`;

export const IconContainer = styled.View`
  /* flex: 1; */
  /* flex-direction: row; */
  /* border: 1px solid blue; */
  /* padding: 13px; */
  margin-bottom: 8px;
  /* border-radius: 40px; */
  /* background-color: white; */
`;

export const ButtonBox = styled.TouchableOpacity`
  flex: 0.5;
  /* width: 120px; */
  /* height: */
  align-items: center;
  justify-content: center;
  background-color: white;

  margin: 0 2px;

  border: 1px solid rgba(0, 0, 0, 0.01);
  border-radius: 20px;

  padding: 15px 10px;
`;
