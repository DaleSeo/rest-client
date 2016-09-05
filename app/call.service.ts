import { Injectable, Optional } from '@angular/core';
import { CALLS }     from './mock-calls';
import { Logger } from './logger.service';
@Injectable()
export class CallService {

  constructor(@Optional() private logger: Logger) {
  }

  getCalls() {
    if (this.logger) {
      this.logger.log('Getting calls ...');
    }
    return CALLS;
  }

}
