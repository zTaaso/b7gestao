import React from 'react';
import { ParamListBase, RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import FormLayout from '~/src/screens/_Layouts/FormLayout';

import CustomText from '~/src/components/CustomText';
import ButtonContainer from '~/src/components/ButtonContainer';
import CustomButton from '~/src/components/CustomButton/index';
import Footer from '~/src/components/FooterContainer/index';
import TextContainer from '../components/TextContainer';

import { IconContainer, StyledLinearGradient } from './styles';

interface RouteParams extends ParamListBase {
  SuccessScreen: {
    title?: string;
    description?: string;
    buttonText?: string;
    redirectRoute?: string;
  };
}

// interface SuccessScreenProps {
//     navigation: NavigationProp<ParamListBase>;
//     route: RouteProp<RouteParams, never>;
// }

const SuccessScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute() as RouteProp<RouteParams, 'SuccessScreen'>;

  const { title, description, buttonText, redirectRoute } = route.params;

  return (
    <FormLayout>
      <IconContainer>
        <StyledLinearGradient colors={['#30D88B', '#23A0B1', '#3AD29F']} start={{ x: 1.1, y: 1.4 }}>
          <FontAwesome5 name="check" size={70} color="white" />
        </StyledLinearGradient>
      </IconContainer>

      <TextContainer>
        <CustomText font="Montserrat_Bold">{title}</CustomText>

        <CustomText fontSize={16}>
          {'\n\n'}
          {description}
        </CustomText>
      </TextContainer>

      <ButtonContainer style={{ marginTop: 20 }}>
        <CustomButton
          bgColor="#30D88B"
          textColor="white"
          onPress={() => navigation.navigate(redirectRoute)}
        >
          {buttonText}
        </CustomButton>
      </ButtonContainer>

      <Footer style={{ marginTop: 10 }} />
    </FormLayout>
  );
};

export default SuccessScreen;
