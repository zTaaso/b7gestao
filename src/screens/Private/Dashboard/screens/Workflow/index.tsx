import React from 'react';
import { FlatList } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import CustomText from '~/src/components/CustomText';

import { Container, Row, TextContainer, IconContainer } from './styles';
import NotificationItem from './NotificationItem/index';
import { useToggleDashboardModal } from '~/src/context/DashboardContext';

const mockData = [
  {
    id: '1',
    name: 'Naruto Uzumaki',
    pic: 'https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png',
    institution: 'Banco Konoha',
    time: '12:01',
    notReadMsgs: '12',
  },
  {
    id: '2',
    name: 'Goku',
    pic: 'https://static.wikia.nocookie.net/b847873f-57b3-4754-902e-ec5e95f19bb0',
    institution: 'Instituto Sayajin',
    time: '12:01',
    notReadMsgs: '2',
  },
  {
    id: '3',
    name: 'Midoriya',
    pic: 'https://img.quizur.com/f/img5df7ddffebb811.45440991.jpg?lastEdited=1576525315',
    institution: 'AllMight Acessoria',
    time: '12:01',
    notReadMsgs: '5',
  },
  {
    id: '4',
    name: 'Bolsonaro',
    pic: 'https://www.cartacapital.com.br/wp-content/uploads/2021/01/Bolsonaro-Impeachment-1.jpg',
    institution: 'Palácio do Planalto',
    time: '14:01',
    notReadMsgs: '1',
  },
  {
    id: '5',
    name: 'Lula',
    pic: 'https://exame.com/wp-content/uploads/2021/05/LULA-RICARDO-STUCKERT.jpg',
    institution: 'Operação Lava-Jato',
    time: '14:05',
    notReadMsgs: '1',
  },
];

const Workflow = () => {
  const { workflowModalRef } = useToggleDashboardModal();

  return (
    <>
      <Row>
        <TextContainer>
          <CustomText color="#FFF" fontSize="15" font="Montserrat_Bold">
            Workflow
          </CustomText>
        </TextContainer>
      </Row>

      <Row>
        <FlatList
          data={mockData}
          renderItem={({ item }) => <NotificationItem data={item} />}
          keyExtractor={(item) => item.id}
        />
      </Row>
      {/* <Row>
        <IconContainer onPress={() => workflowModalRef.current?.open()}>
          <SimpleLineIcons name="arrow-down" size={24} color="white" />
        </IconContainer>
      </Row> */}
    </>
  );
};

export default Workflow;
