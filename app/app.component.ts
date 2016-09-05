import { Component, ViewChild } from '@angular/core';
import { Call } from './call';
import { CallHistoryComponent } from './call-history.component';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  @ViewChild(CallHistoryComponent) history;

  myValue = 2;
  methods = ['GET', 'POST', 'PUT', 'DELETE'];

  addCall(event) {
    console.log(event);
    this.history.addCall(event);
  }

  myValueChange(event) {
    console.log(event);
  }
}
