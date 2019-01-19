import { Injectable, InjectionToken, Inject } from '@angular/core';
import {ApiAiClient} from "api-ai-javascript/es6/ApiAiClient";

export const DS_ACCESS_TOKEN = new InjectionToken<string>('CLIENT_ACCESS_CODE_HERE');

@Injectable({
  providedIn: 'root'
})
export class DialogflowService {
  private apiAiClient: ApiAiClient;

  constructor(@Inject(DS_ACCESS_TOKEN) accessToken: string) { 
    this.apiAiClient = new ApiAiClient({accessToken});
  }
  sendQuestion(question: string): Promise<{}> {
      return new Promise<{}>((resolve, reject) => {
          this.apiAiClient.textRequest(question).then((response) => {
              resolve(response.result);
          });
        
      });
  }
}
