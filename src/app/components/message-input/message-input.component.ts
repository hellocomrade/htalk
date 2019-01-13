import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DialogflowService } from '@app/services/dialogflow.service';

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {
  @Output()
  QuestionSubmitted = new EventEmitter<string>();

  question: string

  constructor(private chatBotService: DialogflowService) { this.question = ''; }

  sendMessage() {
      this.QuestionSubmitted.emit(this.question);
  }

  ngOnInit() {
  }

}
