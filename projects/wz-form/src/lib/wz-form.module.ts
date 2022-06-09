import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PRIMENG_FORM_FIELDS } from './primeng-form-collection';
import { WZ_FORM_ELEMENTS } from './wz-form-collection';
import {FormFieldSlotComponent} from './form-field-slot.component';
import { WzFormComponent } from './wz-form.component';

@NgModule({
  declarations: [
    WzFormComponent,
    FormFieldSlotComponent,
    ...WZ_FORM_ELEMENTS
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...PRIMENG_FORM_FIELDS
  ],
  exports: [
    WzFormComponent,
    FormFieldSlotComponent,
    ...WZ_FORM_ELEMENTS
  ]
})
export class WzFormModule { }
