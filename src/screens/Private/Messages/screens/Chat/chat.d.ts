import { ParamListBase } from '@react-navigation/native';

export default interface ChatProps extends ParamListBase {
  ChatMain: {
    recipient: {
      name: string;
      pic: string;
      message: string;
      time: string;
      notReadMsgs: string;
    };
  };
}
