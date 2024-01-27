import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../service/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit {
  studentName = 'Estudante';
  messages: any[] = [];
  commands: any[] = [];

  constructor(private chatbotService: ChatbotService) {
    this.listCommands();
  }

  ngOnInit() {}

  listCommands() {
    this.chatbotService.listCommands().subscribe((commands: any) => {
      this.commands = commands.filter(
        (command: string) => !['Iniciar', 'NoResults'].includes(command)
      );
      this.start();
    });
  }

  start() {
    this.chatbotService.start().subscribe((res: any) => {
      this.sendBotMessage(res.response);
      window.setTimeout(() => {
        this.sendBotMessage(
          'Comandos disponíveis: ' + this.commands.join(', ') + '.'
        );
      }, 1000);
    });
  }

  query(message: string) {
    window.setTimeout(() => {
      this.chatbotService.query(message).subscribe((res: any) => {
        let delay = 0;
        for (const item of res.response) {
          setTimeout(() => {
            this.sendBotMessage(item, message);
          }, delay);
          delay += 2000;
        }
      });
    }, 1000);
  }

  sendStudentMessage(event: any) {
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: 'text',
      user: {
        name: this.studentName,
      },
    });
    this.query(event.message);
  }

  sendBotMessage(message: string, quote?: string) {
    const messageType = message.includes('http')
      ? 'file'
      : quote
      ? 'quote'
      : 'text';
    this.messages.push({
      text: ['text', 'quote'].includes(messageType) ? message : null,
      date: new Date(),
      reply: false,
      type: messageType,
      files:
        messageType === 'file'
          ? [{ url: message, icon: 'file-text-outline' }]
          : null,
      quote,
      user: {
        name: 'Chatbot PerguntaUFOP',
        avatar:
          'https://media1.tenor.com/m/JWFEQcWcJyQAAAAC/happy-catto-cats.gif',
      },
    });
    console.log(this.messages);
  }
}
