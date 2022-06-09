import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { WzFormModule, WzFormService } from 'projects/wz-form/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from 'layout';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    WzFormModule
  ],
  providers: [
    WzFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
