import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages = [
    { role : "system" , content : "How can I help you today?" }
  ]
  
  constructor() { }
}
