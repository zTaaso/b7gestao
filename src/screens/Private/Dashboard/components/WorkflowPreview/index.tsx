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
];

const WorkflowPreview = () => {
  const { workflowModalRef } = useToggleDashboardModal();

  return (
    <Container
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,

        elevation: 4,
      }}
    >
      <Row>
        <TextContainer>
          <CustomText color="#30D88B" fontSize="15" font="Montserrat_Bold">
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
      <Row>
        <IconContainer onPress={() => workflowModalRef.current?.open()}>
          <SimpleLineIcons name="arrow-down" size={24} color="#30D88B" />
        </IconContainer>
      </Row>
    </Container>
  );
};

export default WorkflowPreview;
