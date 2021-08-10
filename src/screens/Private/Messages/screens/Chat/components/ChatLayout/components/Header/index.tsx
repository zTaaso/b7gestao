import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';
import { format } from 'date-fns';

import CustomText from '~/src/components/CustomText';

import {
  Container,
  TextContainer,
  PictureContainer,
  ProfilePic,
  IconsContainer,
  Icon,
} from './styles';
import { useChatContext } from '~/src/screens/Private/Messages/screens/Chat/context/ChatContext';

interface PrivateHeaderProps {
  recipient: {
    name: string;
    pic?: string;
  };
  onDeleteMsg: (ids: number[]) => void;
}

const ChatHeader: React.FC<PrivateHeaderProps> = ({ recipient, onDeleteMsg }) => {
  const navigation = useNavigation();

  const { selectMessagesState, selectedMessagesState } = useChatContext();
  const [isSelectingMessages] = selectMessagesState;
  const [selectedMessages, setSelectedMessages] = selectedMessagesState;

  function handleDeleteMsg() {
    const ids = selectedMessages.map((msg) => msg.id);
    onDeleteMsg(ids as number[]);
    setSelectedMessages([]);
    Toast.show({
      text1: ids.length > 1 ? 'Mensagens apagadas.' : 'Mensagem apagada.',
      type: 'success',
      visibilityTime: 1500,
      position: 'top',
    });
  }

  async function handleCopyMsg() {
    const sortedSelectedMsgs = selectedMessages.sort((a, b) => a.date.getTime() - b.date.getTime());

    const newClipboardText = sortedSelectedMsgs.reduce((prev, curr) => {
      if (selectedMessages.length > 1) {
        const formattedDate = format(new Date(curr.date), "d/MM '-' HH:mm");
        const serializedString = `[${formattedDate}]: ${curr.text}`;

        const finalString = prev ? `${prev}\n${serializedString}` : `${serializedString}`;
        return finalString;
      }

      return curr.text;
    }, '');

    Clipboard.setString(newClipboardText);

    setSelectedMessages([]);
    Toast.show({
      text1: 'Texto copiado.',
      type: 'success',
      visibilityTime: 1500,
      position: 'top',
    });
  }

  if (isSelectingMessages) {
    return (
      <Container>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={45} color="#FFF" />
        </TouchableOpacity>

        <IconsContainer>
          <Icon onPress={handleDeleteMsg}>
            <MaterialIcons name="delete" size={28} color="white" />
          </Icon>
          <Icon onPress={handleCopyMsg}>
            <FontAwesome5 name="copy" size={28} color="white" />
          </Icon>
        </IconsContainer>
      </Container>
    );
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={45} color="#FFF" />
      </TouchableOpacity>
      <PictureContainer>
        <ProfilePic source={{ uri: recipient.pic }} />
      </PictureContainer>
      <TextContainer>
        <CustomText
          color="#FFF"
          fontSize="18"
          textAlign="left"
          font="Montserrat_Bold"
          numberOfLines={1}
        >
          {recipient.name}
        </CustomText>
      </TextContainer>
      {/* <SettingsContainer>
        <SettingsIcon width="30" height="30" />
      </SettingsContainer> */}
    </Container>
  );
};

export default React.memo(ChatHeader);
