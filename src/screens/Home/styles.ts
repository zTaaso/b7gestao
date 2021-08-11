import styled, { css } from 'styled-components/native';

interface TermsTextTypes {
  underline?: boolean;
}

export const Container = styled.View`
  flex: 1;
  /* border: 1px solid red; */
  padding: 50px 0 10px;

  background-color: #1a1f24;
  /* align-items: center; */
  justify-content: space-evenly;
`;

export const ImageContainer = styled.ImageBackground`
  flex: 1;
  opacity: 1;
`;

export const DarkLayer = styled.View`
  flex: 1;
  opacity: 0.8;
  background-color: #00174b84;
`;

export const LogoContent = styled.View`
  flex: 1;
  min-height: 90px;
  /* border: 1px solid red; */
`;

export const TermsText = styled.Text<TermsTextTypes>`
  /* border: 1px solid red; */
  color: white;
  font-family: 'Montserrat';
  font-size: 12px;

  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `}
`;

export const TermsContainer = styled.View`
  flex: 1;
  margin-top: 20px;
  align-items: center;

  /* justify-content: center; */

  padding: 5px 20px;
  /* border: 1px solid red; */
`;
