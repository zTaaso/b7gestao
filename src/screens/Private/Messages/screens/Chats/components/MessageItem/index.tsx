import { useNavigation } from '@react-navigation/native';
import React from 'react';

import CustomText from '~/src/components/CustomText';

import {
  Container,
  PictureContainer,
  ProfilePic,
  MessageInfo,
  ContentInfo,
  TimeInfo,
  NonReadMsgs,
} from './styles';

interface MessageItemProps {
  data: {
    name: string;
    pic: string;
    message: string;
    time: string;
    notReadMsgs: string;
  };
}

const MessageItem: React.FC<MessageItemProps> = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('MessagesChatMain', { recipient: data })}>
      <PictureContainer>
        <ProfilePic
          source={{
            uri: data.pic,
          }}
        />
      </PictureContainer>

      <MessageInfo>
        <ContentInfo>
          <CustomText fontSize="14" font="Montserrat_Bold" textAlign="left" color="#279DD1">
            {data.name}
          </CustomText>

          <CustomText textAlign="left" fontSize="13" color="rgba(0, 0, 0, 0.6)" numberOfLines={1}>
            {data.message}
          </CustomText>
        </ContentInfo>

        <TimeInfo>
          <CustomText fontSize="13" font="Montserrat_Bold" color="#279DD1">
            {data.time}
          </CustomText>

          <NonReadMsgs>
            <CustomText fontSize="12" textAlign="left" color="#FFF">
              {data.notReadMsgs}
            </CustomText>
          </NonReadMsgs>
        </TimeInfo>
      </MessageInfo>
    </Container>
  );
};

export default MessageItem;
