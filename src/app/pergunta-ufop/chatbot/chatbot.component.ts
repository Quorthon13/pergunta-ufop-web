import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../service/chatbot.service';
import Message from '../model/message';
import SenderEnum from '../model/sender-enum';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit {
  messages: Message[] = [];
  senderEnum = SenderEnum;

  constructor(private chatbotService: ChatbotService) {
    this.start();
  }

  ngOnInit() {}

  start() {
    const newMessage = {
      content: 'start',
      sender: SenderEnum.USER,
      timestamp: new Date(),
    };
    this.messages = [newMessage];
    this.sendMessage(newMessage);
  }

  sendMessage(message: Message) {
    this.chatbotService.query(message.content).subscribe((res: any) => {
      console.log(res);
      this.messages.push({
        content: res.response,
        sender: SenderEnum.BOT,
        timestamp: new Date(),
      });
    });
  }
}
