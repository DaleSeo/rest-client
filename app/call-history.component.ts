import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Call}    from './call';
import {CallHistoryService} from './call.history.service';
@Component({
  selector: 'call-history',
  templateUrl: 'app/call-history.component.html',
  providers: [CallHistoryService]
})
export class CallHistoryComponent {
  history: Call[] = [];

  constructor(private callService: CallHistoryService) {
    this.callService = callService;
  }

  public addCall(call) {
    this.history.push(call);
  }

}
