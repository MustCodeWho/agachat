import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  listLinks : Array<any> = [];
  latestId: number = 0;

  constructor(private chatService : ChatService) { }

  ngOnInit(): void {
  }

  newChat() { 
    let chatObject = {
      id : ++this.latestId,
      text : "Chat Started"
    }
    this.listLinks.push(chatObject);
  }

  resetChat() {
    if (this.chatService.messages.length > 1) {
      this.chatService.messages.splice(1);
    }
  }

}
