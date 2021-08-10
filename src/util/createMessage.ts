import { format } from 'date-fns';

const createMessage = (messageText: string, isSent: boolean) => {
  const randomNumber = Math.round(Math.random() * 1000);
  const randomID = `${new Date().getMilliseconds().toString()}-${randomNumber}`;

  const newDate = new Date();

  return {
    id: randomID,
    type: 'message' as const,
    message: {
      content: messageText,
      isSent,
      date: {
        formatted: format(newDate, "HH':'mm"),
      },
    },
    date: {
      dateObj: newDate,
      formatted: '27 de Fevereiro',
    },
  };
};

export default createMessage;
