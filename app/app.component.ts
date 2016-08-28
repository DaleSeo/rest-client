import { Component } from '@angular/core';
import { Call } from './call';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  calls: Call[] = [
    new Call(1, "GET", "http://www.google.com"),
    new Call(2, "GET", "http://www.naver.com"),
    new Call(3, "GET", "http://www.daum.net"),
  ]
}
