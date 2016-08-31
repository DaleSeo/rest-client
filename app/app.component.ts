import { Component } from '@angular/core';
import { Call } from './call';
import { CallService } from './call.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  history: Call[] = [];

  addCall(method: string, url: string) {
    var newCall = new Call(0, method, url);
    this.history.push(newCall);
  }
}
