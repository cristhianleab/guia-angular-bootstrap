import { Component, Input, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnDestroy {

  constructor(private chatService: ChatService) {
    this.chatSubscription = this.chatService.getMessage()
      .subscribe(message => {
        this.messages.push(message);
      });
  }

  @Input() chat: string;
  messages: Array<Chat> = [];
  message: string = "";
  chatSubscription: Subscription;

  sendMessage(): void {
    this.chatService.sendMessage(
      {
        chat: this.chat,
        message: this.message,
        time: new Date()
      }
    );

    this.message = "";
  }

  ngOnDestroy() {
    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();
    }
  }

}
