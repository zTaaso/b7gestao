import React from 'react';
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';

import CustomText from '~/src/components/CustomText';

import {
  Container,
  Picture,
  InfoContent,
  MessageInfo,
  IconContainer,
  NonReadMsgs,
  ExtraContent,
  Row,
  RespondContainer,
} from './styles';
import { useState } from 'react';
import { useToggleDashboardModal } from '~/src/context/DashboardContext';
import { useNavigation } from '@react-navigation/core';

interface NotificationItemProps {
  data: {
    name: string;
    pic: string;
    institution: string;
    time: string;
    notReadMsgs: string;
  };
}

const NotificationItem: React.FC<NotificationItemProps> = ({ data }) => {
  const navigation = useNavigation();
  const [isExpanded, setiIsExpanded] = useState(false);

  const iconDirection = isExpanded ? 'left' : 'down';

  const handleRespondPress = React.useCallback(() => {
    navigation.navigate('MessagesChatMain', {
      recipient: data,
    });
  }, []);

  return (
    <Container onPress={() => setiIsExpanded(!isExpanded)}>
      <Row>
        <Picture source={{ uri: data.pic }} resizeMethod="resize" resizeMode="cover" />

        <InfoContent>
          <CustomText
            font="Montserrat_Bold"
            color="white"
            fontSize="12"
            textAlign="left"
            numberOfLines={1}
          >
            Nova notificação de {data.name}
          </CustomText>
          <CustomText color="white" fontSize="12" textAlign="left">
            {data.institution}
          </CustomText>
        </InfoContent>

        <MessageInfo>
          <CustomText font="Montserrat" color="white" fontSize="12">
            {data.time}
          </CustomText>

          <NonReadMsgs>
            <CustomText font="Montserrat_Bold" color="#000" fontSize="10">
              {data.notReadMsgs}
            </CustomText>
          </NonReadMsgs>
        </MessageInfo>

        <IconContainer onPress={() => setiIsExpanded(!isExpanded)}>
          <SimpleLineIcons name={`arrow-${iconDirection}`} size={19} color="white" />
        </IconContainer>
      </Row>

      {isExpanded && (
        <ExtraContent>
          <CustomText fontSize="13" color="#FFF" textAlign="left">
            Você está lendo a notificação de {data.name}!
          </CustomText>

          <RespondContainer onPress={handleRespondPress}>
            <CustomText
              font="Montserrat_Bold"
              fontSize="13"
              underline
              color="white"
              textAlign="left"
              style={{ marginRight: 10 }}
            >
              Responder
            </CustomText>
            <MaterialIcons name="question-answer" size={18} color="#30d88b" />
          </RespondContainer>
        </ExtraContent>
      )}
    </Container>
  );
};

export default React.memo(NotificationItem);
