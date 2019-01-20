import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed, async } from '@angular/core/testing';
import { DialogflowService, DS_ACCESS_TOKEN } from './dialogflow.service';

describe('DialogflowService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: DS_ACCESS_TOKEN, useValue: 'dummy'}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: DialogflowService = TestBed.get(DialogflowService);
    expect(service).toBeTruthy();
  });
});
