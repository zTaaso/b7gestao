import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import CustomText from '~/src/components/CustomText';

import { Container, Picture, InfoContent, MessageInfo, IconContainer, NonReadMsgs } from './styles';
import { useToggleDashboardModal } from '~/src/context/DashboardContext';

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
  const { workflowModalRef } = useToggleDashboardModal();

  return (
    <Container onPress={() => workflowModalRef.current?.open()}>
      <Picture source={{ uri: data.pic }} resizeMethod="resize" resizeMode="cover" />

      <InfoContent>
        <CustomText
          font="Montserrat_Bold"
          color="black"
          fontSize="12"
          textAlign="left"
          numberOfLines={1}
        >
          Nova notificação de {data.name}
        </CustomText>
        <CustomText color="black" fontSize="12" textAlign="left">
          {data.institution}
        </CustomText>
      </InfoContent>

      <MessageInfo>
        <CustomText font="Montserrat" color="black" fontSize="12">
          {data.time}
        </CustomText>

        <NonReadMsgs>
          <CustomText font="Montserrat_Bold" color="#FFF" fontSize="10">
            {data.notReadMsgs}
          </CustomText>
        </NonReadMsgs>
      </MessageInfo>

      {/* <IconContainer>
        <SimpleLineIcons name="arrow-right" size={19} color="white" />
      </IconContainer> */}
    </Container>
  );
};

export default NotificationItem;
