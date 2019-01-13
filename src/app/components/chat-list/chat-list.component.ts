import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@app/poto';

@Component({
  selector: 'chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  @Input('messages')
  messages: Message[];

  constructor() { }

  ngOnInit() {
  }

}
