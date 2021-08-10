import ChatMessage from './Message';

export default interface TimelineItem {
  id: string | number;
  type: 'message' | 'datelog';
  message?: ChatMessage;
  date: {
    dateObj: Date;
    formatted: string;
  };
}
