import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatbotComponent } from './pergunta-ufop/chatbot/chatbot.component'; // Import your ChatbotComponent here

const routes: Routes = [
  { path: '', redirectTo: '/chatbot', pathMatch: 'full' }, // Redirects to /chatbot when path is empty
  { path: 'chatbot', component: ChatbotComponent }, // Maps /chatbot path to ChatbotComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
