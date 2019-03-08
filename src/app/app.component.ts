import { Component } from '@angular/core';
import { Message } from '@app/poto';
import { DialogflowService } from '@app/services/dialogflow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'htalk';
  messages: Message[];

  constructor(private chatBotService: DialogflowService) {
      this.messages = [];
      this.title = 'htalk';
  }

  OnQuestionSubmitted(question: string) {
      this.messages.push(new Message(question, false, new Date()));
      this.chatBotService.sendQuestion(question).then((res) => {
        this.messages.push(new Message(res['fulfillment']['messages'][0]['speech'], true, new Date()));
      });
  }
}
