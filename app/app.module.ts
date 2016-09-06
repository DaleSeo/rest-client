import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CallFormComponent } from './call-form.component';
import { CallListComponent } from './call-list.component';
import { CallHistoryComponent } from './call-history.component';
import { Logger } from './logger.service';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    CallFormComponent,
    CallListComponent,
    CallHistoryComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ Logger ]
})
export class AppModule { }
