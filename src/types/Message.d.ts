export default interface ChatMessage {
  content: string;
  isSent: boolean;
  date: {
    formatted: string;
  };
}
