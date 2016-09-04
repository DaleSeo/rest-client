import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Call}    from './call';
import {CallService} from './call.service';
@Component({
  selector: 'call-list',
  templateUrl: 'app/call-list.component.html',
  providers: [CallService]
})
export class CallListComponent {
  @Input() counterValue: number = 0;
  @Output() counterChange = new EventEmitter();
  currentCall: Call = new Call(0, "GET", "http://");
  calls: Call[];

  constructor(private callService: CallService) {
    this.calls = callService.getCalls();
  }

  setCall(call: Call) {
    this.currentCall = call;
  }

  updateCounter(counterValue: number) {
    this.counterValue = counterValue;
    this.counterChange.emit({
      value: this.counterValue
    })
  }

}
