import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import CustomText from '~/src/components/CustomText';

import {
  Container,
  DateInfo,
  Description,
  PriceInfo,
  IconContainer,
  CustomDay,
  DateInfoColumn,
  VisibleContent,
  ExtraContent,
} from './styles';
import PaymentTransfer from '~/src/screens/Private/Payments/types/PaymentTransfer';
import { useState } from 'react';

interface ScheduledPaymentItemProps {
  data: PaymentTransfer;
}

const ScheduledPaymentItem: React.FC<ScheduledPaymentItemProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const arrowDirection = isExpanded ? 'left' : 'down';

  return (
    <Container>
      <VisibleContent>
        <DateInfo>
          <CustomDay>{data.date.monthDay}</CustomDay>
          <DateInfoColumn>
            <CustomText font="Montserrat_Light" fontSize="14" color="#E63874">
              {data.date.weekDay}
            </CustomText>
            <CustomText font="Montserrat_Bold" fontSize="18" color="#E63874">
              {data.date.month}
            </CustomText>
          </DateInfoColumn>
        </DateInfo>

        <Description>
          <CustomText font="Montserrat" fontSize="13" numberOfLines={2} uppercase>
            {data.title}
          </CustomText>
        </Description>

        <PriceInfo>
          <CustomText font="Montserrat_Light" fontSize="14" color="#E63874">
            Total
          </CustomText>
          <CustomText font="Montserrat_Bold" fontSize="14" numberOfLines={1}>
            {data.formattedValue}
          </CustomText>
        </PriceInfo>

        <IconContainer onPress={() => setIsExpanded(!isExpanded)}>
          <MaterialIcons name={`keyboard-arrow-${arrowDirection}`} size={28} color="#E63874" />
        </IconContainer>
      </VisibleContent>

      {isExpanded && (
        <ExtraContent>
          <CustomText fontSize="13" textAlign="left">
            <CustomText font="Montserrat_Bold" fontSize="13" textAlign="left" color="#E63874">
              Pagador:
            </CustomText>{' '}
            {data.payer}
          </CustomText>

          <CustomText fontSize="13" textAlign="left">
            <CustomText font="Montserrat_Bold" fontSize="13" textAlign="left" color="#E63874">
              Benefici??rio:
            </CustomText>{' '}
            {data.payee}
          </CustomText>

          <CustomText fontSize="13" textAlign="left">
            <CustomText font="Montserrat_Bold" fontSize="13" textAlign="left" color="#E63874">
              Descri????o:
            </CustomText>{' '}
            {data.description}
          </CustomText>
        </ExtraContent>
      )}
    </Container>
  );
};

export default React.memo(ScheduledPaymentItem);
