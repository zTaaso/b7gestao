import React, { useEffect, useState } from 'react';
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import Product from '../../types/Product';

import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';
import CustomText from './../../../../../../../../../components/CustomText/index';

import {
  Container,
  QuantiyForm,
  QuantityInput,
  EditAmountButton,
  FormContent,
  NotesInput,
  BlockContent,
  SaveButtonContainer,
  SaveButton,
} from './styles';

interface RouteParams extends ParamListBase {
  ProductsDetails: {
    product: Product;
  };
}

const SalesPointSellProductDetails: React.FC = () => {
  const route = useRoute() as RouteProp<RouteParams, 'ProductsDetails'>;
  const { product } = route.params;

  const [productAmount, setProductAmount] = useState(product.amount);

  // console.log({ productAmount });

  const editProductAmount = (value: number) => {
    if (productAmount + value < 1) return;
    setProductAmount((prevValue) => prevValue + value);
  };

  useEffect(() => {
    setProductAmount(product.amount);
  }, [product]);

  return (
    <PrivateLayout screenName={`Produto: ${product.name}`}>
      <Container>
        <BlockContent>
          <CustomText font="Montserrat_Bold" fontSize="22">
            Quantidade
          </CustomText>
          <QuantiyForm>
            <EditAmountButton onPress={() => editProductAmount(-1)}>
              <AntDesign name="minus" size={32} color="#000" />
            </EditAmountButton>
            <QuantityInput
              keyboardType="number-pad"
              value={productAmount.toString()}
              onChangeText={(text) => setProductAmount(Number(text.replace(/[^0-9]/g, '')))}
            />

            <EditAmountButton onPress={() => editProductAmount(1)}>
              <AntDesign name="plus" size={32} color="#000" />
            </EditAmountButton>
          </QuantiyForm>
        </BlockContent>

        <BlockContent>
          <CustomText font="Montserrat_Bold" fontSize="22" style={{ marginTop: 20 }}>
            Observações
          </CustomText>
          <FormContent>
            <NotesInput
              multiline
              placeholder="Anotações"
              placeholderTextColor="rgba(255, 255, 255, 0.2)"
            />
          </FormContent>
        </BlockContent>
        <BlockContent>
          <CustomText font="Montserrat_Bold" fontSize="22" style={{ marginTop: 20 }}>
            Descrição do Produto
          </CustomText>
          <FormContent>
            <CustomText fontSize="16" color="rgba(255, 255, 255, 0.5)" style={{ marginTop: 10 }}>
              {product.description || 'Sem descrição.'}
            </CustomText>
          </FormContent>
        </BlockContent>

        <SaveButtonContainer>
          <SaveButton>
            <CustomText font="Montserrat_Bold" color="#000">
              Salvar
            </CustomText>
          </SaveButton>
        </SaveButtonContainer>
      </Container>
    </PrivateLayout>
  );
};

export default SalesPointSellProductDetails;
