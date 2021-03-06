import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {
  @Output()
  QuestionSubmitted = new EventEmitter<string>();

  question: string

  constructor() { this.question = ''; }

  sendMessage() {
      this.QuestionSubmitted.emit(this.question);
      this.question = '';
  }

  ngOnInit() {
  }

}
