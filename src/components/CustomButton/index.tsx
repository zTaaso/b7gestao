import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TouchableOpacityProps } from 'react-native';
import CustomText from '../CustomText';
import { StyledTextTypes } from '../CustomText/styles';

import { StyledButton, ButtonText, StyledLinearGradient, CustomButtonTypes } from './styles';

type PropTypes<T> = React.FC<TouchableOpacityProps & T>;

type ButtonTypes = 'gradient' | 'default';

interface CustomButtonProps extends CustomButtonTypes {
  type?: ButtonTypes;
  textColor?: string;
  textProps?: StyledTextTypes;
}

const CustomButton: PropTypes<CustomButtonProps> = ({ children, textProps, ...props }) => {
  if (props.type === 'gradient') {
    return (
      <TouchableOpacity {...props}>
        <StyledLinearGradient colors={['#279DD1', '#23A0B1', '#3AD29F']} start={{ x: 1.1, y: 1.4 }}>
          <ButtonText style={{ color: 'white' }}>{children}</ButtonText>
        </StyledLinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <StyledButton {...props} activeOpacity={0.2}>
      <CustomText font="Montserrat_Bold" uppercase color={props.textColor} {...textProps}>
        {children}
      </CustomText>
      {/* <ButtonText>{children}</ButtonText> */}
    </StyledButton>
  );
};

export default CustomButton;
