import React from 'react';

import CustomText from '~/src/components/CustomText';
import ArrowUpIcon from '~/src/assets/icons/arrow-alt-circle-down-solid.svg';
import ArrowDownIcon from '~/src/assets/icons/arrow-alt-circle-down-regular.svg';

import PaymentTransfer from '../../../../types/PaymentTransfer';

import {
  Row,
  SourceColumn,
  ValueColumn,
  DateColumn,
  TypeColumn,
  IconContainer,
} from '../../styles';

interface RowItemProps {
  item: PaymentTransfer;
  reportType: 'done' | 'received' | 'all';
}

const RowItem: React.FC<RowItemProps> = ({ item, reportType }) => {
  let sourceType = reportType === 'done' ? 'payee' : 'payer';
  if (reportType === 'all') {
    const entity = item.payee === 'BH Softwares' ? 'payer' : 'payee';
    // quem está sendo pago é o usuário atual? se sim, a entidade a ter seu nome exibida é o pagador.
    // se não, significa que o usuário atual é quem fez o pagamento, então a entidade a ser exibida é o beneficiário.
    sourceType = entity;
  }

  const isReceived = sourceType === 'payer';

  return (
    <Row key={item.id}>
      {reportType === 'all' && (
        <TypeColumn>
          <IconContainer>
            {isReceived ? (
              <ArrowDownIcon width="20" height="25" />
            ) : (
              <ArrowUpIcon width="20" height="25" />
            )}
          </IconContainer>
        </TypeColumn>
      )}
      <DateColumn>
        <CustomText font="Montserrat" fontSize="14" textAlign="left" color="#279DD1">
          06 Fev
        </CustomText>
      </DateColumn>

      <SourceColumn>
        <CustomText
          font="Montserrat"
          fontSize="14"
          textAlign="left"
          color="#279DD1"
          numberOfLines={1}
        >
          {item[sourceType as 'payee' | 'payer']} - {item.bank}
        </CustomText>
      </SourceColumn>

      <ValueColumn>
        <CustomText
          font="Montserrat_Bold"
          fontSize="14"
          textAlign="right"
          color="#279DD1"
          numberOfLines={1}
        >
          {item.formattedValue}
        </CustomText>
      </ValueColumn>
    </Row>
  );
};

export default React.memo(RowItem);
