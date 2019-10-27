import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesEmitter = new Subject<any>();

  sendMessage(chat: Chat) {
    this.messagesEmitter.next(chat);
  }

  getMessage(): Observable<any> {
    return this.messagesEmitter.asObservable();
  }
}