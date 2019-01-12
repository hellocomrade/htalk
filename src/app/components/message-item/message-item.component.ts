import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {
  @Input('message')
  message: string;
  constructor() { }

  ngOnInit() {
  }

}
