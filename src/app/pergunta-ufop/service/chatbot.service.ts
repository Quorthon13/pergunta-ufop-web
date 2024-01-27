import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  readonly baseUrl = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  query(query: string) {
    return this.http.get(`${this.baseUrl}/chatbot`, {
      params: { query },
    });
  }

  start() {
    return this.http.get(`${this.baseUrl}/chatbot/start`);
  }
}
