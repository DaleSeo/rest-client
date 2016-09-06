import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Call }    from './call';
@Component({
  selector: 'call-form',
  templateUrl: 'app/call-form.component.html'
})
export class CallFormComponent {
  @Input()
  methods;

  // @Output()
  // historyAdded: EventEmitter<Call> = new EventEmitter();

  submitted = false;
  active = true;

  model = new Call(0, "GET", "http://www.google.com");

  newCall() {
    this.model = new Call(0, "GET", "");
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  send() {
    console.log(this.model);
    // this.historyAdded.emit(this.model);
  }
}
