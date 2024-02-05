import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot/chatbot.component';
import {
  NbButtonModule,
  NbCardModule,
  NbChatModule,
  NbIconModule,
  NbLayoutModule,
  NbListModule,
  NbSidebarModule,
} from '@nebular/theme';

@NgModule({
  declarations: [ChatbotComponent],
  imports: [
    CommonModule,
    NbChatModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbSidebarModule,

    NbIconModule,
  ],
  exports: [ChatbotComponent],
})
export class PerguntaUfopModule {}
