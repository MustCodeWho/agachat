import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chatzone',
  templateUrl: './chatzone.component.html',
  styleUrls: ['./chatzone.component.css']
})
export class ChatzoneComponent implements OnInit {

  chatMessage !: FormGroup;
  

  result !: Array<any>;

  constructor(private fb: FormBuilder,private http : HttpClient,public chatService : ChatService) { }

  ngOnInit(): void {
      this.chatMessage = this.fb.group({
        message : this.fb.control("")
      })
  }


  startAgaChat() {
    let urlChat = "https://api.openai.com/v1/chat/completions"

    let _headers = new HttpHeaders().set("Authorization","Bearer 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")
    
    this.chatService.messages.push({
      role : "user" , content : this.chatMessage.value.message
    })
    
    this.http.post(urlChat,{
      model: "gpt-3.5-turbo",
      messages : this.chatService.messages
    },{headers : _headers}).subscribe({
      next : (res : any) => {
        console.log(res,res.choices);
        this.result = res.choices;

        this.result.forEach((choice: any) => {
            this.chatService.messages.push({
              role: "assistant" , content : choice.message.content
            })
        })

        this.chatMessage.reset();
       
      },
      error : error => {
        console.log(error);
      }
    })

  }

}
