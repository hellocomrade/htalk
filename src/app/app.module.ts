import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatListComponent } from '@app/components/chat-list/chat-list.component';
import { MessageItemComponent } from '@app/components/message-item/message-item.component';
import { MessageInputComponent } from '@app/components/message-input/message-input.component';
import { DialogflowService, DS_ACCESS_TOKEN } from '@app/services/dialogflow.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    MessageItemComponent,
    MessageInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DialogflowService,
    {provide: DS_ACCESS_TOKEN, useValue: ''}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
