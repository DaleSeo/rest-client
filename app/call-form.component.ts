import { Component } from '@angular/core';
import { Call }    from './call';
@Component({
  selector: 'call-form',
  templateUrl: 'app/call-form.component.html'
})
export class CallFormComponent {
  submitted = false;
  active = true;
  methods = ['GET', 'POST', 'PUT', 'DELETE'];
  model = new Call(0, "GET", "http://www.google.com");
  newCall() {
    this.model = new Call(0, "GET", "");
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
