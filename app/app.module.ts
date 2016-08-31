import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CallFormComponent } from './call-form.component';
import { CallListComponent } from './call-list.component';
import { Logger } from './logger.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CallFormComponent,
    CallListComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ Logger ]
})
export class AppModule { }
