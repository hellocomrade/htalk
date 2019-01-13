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
      this.messages = [];
  }

  OnQuestionSubmitted(question: string) {
      this.messages.push(new Message(question, new Date));
  }
}
