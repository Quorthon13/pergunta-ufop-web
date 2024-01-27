import SenderEnum from './sender-enum';

interface Message {
  content: string;
  sender: SenderEnum;
  timestamp: Date;
}

export default Message;
