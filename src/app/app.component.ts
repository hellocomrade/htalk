import { Component } from '@angular/core';
import { Message } from '@app/poto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'htalk';
  messages: Message[];

  constructor() {
    this.messages = [new Message("Welcome!", new Date())];
  }
}
