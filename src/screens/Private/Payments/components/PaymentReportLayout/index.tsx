import React from 'react';
import CustomText from '~/src/components/CustomText';

import {
  Container,
  Row,
  DateColumn,
  SourceColumn,
  ValueColumn,
  ShowAllContainer,
  TypeColumn,
} from './styles';

import PaymentTransfer from '~/src/screens/Private/Payments/types/PaymentTransfer';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItemInfo } from 'react-native';
import RowItem from './components/RowItem';
import InfoBoxes from '~/src/components/InfoBoxes';
import { useState } from 'react';
import { useEffect } from 'react';

interface PaymentReportLayoutProps {
  data: PaymentTransfer[];
  reportType: 'received' | 'done' | 'all';
  showType?: boolean;
}

const PaymentReportLayout: React.FC<PaymentReportLayoutProps> = ({ data, reportType }) => {
  const [showAll, setShowAll] = useState(false);
  const [payments, setPayments] = useState(data);

  const { sourceEntity, toggleText } = React.useMemo(() => {
    let sourceEntity = reportType === 'done' ? 'Beneficiário' : 'Pagador';
    if (reportType === 'all') {
      sourceEntity = 'Entidade';
    }

    const toggleText = showAll ? 'Exibir menos' : 'Exibir todos';

    return { sourceEntity, toggleText };
  }, [showAll]);

  const renderItem = React.useCallback(
    ({ item }: ListRenderItemInfo<PaymentTransfer>) => (
      <RowItem item={item} reportType={reportType} />
    ),
    [showAll]
  );

  function handleToggleShowAll() {
    setShowAll(!showAll);
  }

  useEffect(() => {
    if (showAll) {
      const newPayments = data.slice(0, data.length - 1);
      setPayments(newPayments);
      return;
    }
    const newPayments = data.slice(0, 5);
    setPayments(newPayments);
  }, [showAll]);

  return (
    <Container>
      <FlatList
        contentContainerStyle={{ flexGrow: 1, padding: 10 }}
        data={payments}
        ListHeaderComponent={
          <Row>
            {reportType === 'all' && (
              <TypeColumn>
                <CustomText font="Montserrat_Bold" fontSize="16" textAlign="left" color="#279DD1">
                  Tipo
                </CustomText>
              </TypeColumn>
            )}
            <DateColumn>
              <CustomText font="Montserrat_Bold" fontSize="16" textAlign="left" color="#279DD1">
                Data
              </CustomText>
            </DateColumn>

            <SourceColumn>
              <CustomText font="Montserrat_Bold" fontSize="16" textAlign="left" color="#279DD1">
                {sourceEntity}
              </CustomText>
            </SourceColumn>

            <ValueColumn>
              <CustomText font="Montserrat_Bold" fontSize="16" textAlign="right" color="#279DD1">
                Valor
              </CustomText>
            </ValueColumn>
          </Row>
        }
        renderItem={renderItem}
        ListFooterComponent={
          <>
            <ShowAllContainer onPress={handleToggleShowAll}>
              <CustomText
                font="Montserrat_Bold"
                fontSize="14"
                textAlign="center"
                color="#279DD1"
                underline
              >
                {toggleText}
              </CustomText>
            </ShowAllContainer>
            <InfoBoxes />
          </>
        }
      />
    </Container>
  );
};

export default React.memo(PaymentReportLayout);
