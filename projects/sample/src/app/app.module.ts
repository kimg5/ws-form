import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WzFormModule, WzFormService } from 'projects/wz-form/src/public-api';

import { LayoutModule } from 'layout';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    WzFormModule
  ],
  providers: [
    WzFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
