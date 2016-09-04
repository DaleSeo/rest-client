import { Component } from '@angular/core';
import { Call } from './call';
import { CallService } from './call.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  myValue = 2;
  methods = ['GET', 'POST', 'PUT', 'DELETE'];

  history: Call[] = [];

  addCall(event) {
    console.log(event)
    this.history.push(event);
  }

  myValueChange(event) {
    console.log(event);
  }
}
