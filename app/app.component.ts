import { Component } from '@angular/core';
import { Call } from './call';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  currentCall: Call = new Call(0, "GET", "http://");

  calls: Call[] = [
    new Call(1, "GET", "http://www.google.com"),
    new Call(2, "POST", "http://www.naver.com"),
    new Call(3, "PUT", "http://www.daum.net"),
    new Call(4, "DELETE", "http://www.nate.com")
  ];

  history: Call[] = []

  setCall(call: Call) {
    this.currentCall = call;
  }

  addCall(method: string, url: string) {
    var newCall = new Call(0, method, url);
    this.history.push(newCall);
  }

}
