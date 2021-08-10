import React, { useEffect, useState } from 'react';

import CustomText from '~/src/components/CustomText';
import TimelineItemTypes from '~/src/types/TimelineItem';

import { Container, MessageContent, MessageBody, MessageDate } from './styles';
import { useChatContext } from '~/src/screens/Private/Messages/screens/Chat/context/ChatContext';

interface TimelineItemProps {
  data: TimelineItemTypes;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ data }) => {
  // const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(false);
  const firstUpdate = React.useRef(true);

  const { selectMessagesState, selectedMessagesState } = useChatContext();
  const [isSelectingMessages, setIsSelectingMessages] = selectMessagesState;
  const [selectedMessages, setSelectedMessages] = selectedMessagesState;

  const { textColor, bgColor, alignItems } = React.useMemo(() => {
    const textColor = data?.message?.isSent ? 'white' : 'black';
    const bgColor = data?.message?.isSent ? '#3ad29f' : 'white';
    const alignItems = data?.message?.isSent ? 'flex-end' : 'flex-start';

    return { textColor, bgColor, alignItems };
  }, [data?.message?.isSent]);

  // console.log(`remontado - ${data.message?.content}`);

  function handlePress() {
    if (isSelectingMessages) {
      setIsSelected(!isSelected);
      return;
    }

    setIsSelected(false);
  }

  useEffect(() => {
    // impede a execução caso seja o primeiro render
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (isSelected) {
      const newSelectedMessages = [
        ...selectedMessages,
        { id: data.id, text: data.message?.content, date: data.date.dateObj },
      ];

      setSelectedMessages(newSelectedMessages);
      return;
    }

    // unselecting the message
    const newSelectedMessages = selectedMessages.filter((msg) => msg.id !== data.id);
    setSelectedMessages(newSelectedMessages);
  }, [isSelected]);

  useEffect(() => {
    if (!selectedMessages.length) {
      setIsSelected(false);
    }
  }, [selectedMessages]);

  return React.useMemo(() => {
    return (
      <Container
        alignItems={alignItems}
        onLongPress={() => {
          setIsSelected(true);
          setIsSelectingMessages(true);
        }}
        onPress={handlePress}
        isSelected={isSelected}
      >
        <MessageContent bgColor={bgColor} style={{ elevation: 6 }}>
          <MessageBody>
            <CustomText
              fontSize="13"
              font="Montserrat_Bold"
              textAlign="left"
              color={textColor}
              selectable
            >
              {data?.message?.content}
            </CustomText>
          </MessageBody>

          <MessageDate>
            <CustomText fontSize="12" color="rgba(0,0,0,0.4)">
              {data?.message?.date.formatted}
            </CustomText>
          </MessageDate>
        </MessageContent>
      </Container>
    );
  }, [isSelected, isSelectingMessages]);
};

export default React.memo(TimelineItem);
