import { NgModule } from '@angular/core';
import { WzFormComponent } from './wz-form.component';
import { FormFieldSlotComponent } from './form-field-slot/form-field-slot.component';

@NgModule({
  declarations: [
    WzFormComponent,
    FormFieldSlotComponent,
  ],
  imports: [
  ],
  exports: [
    WzFormComponent
  ]
})
export class WzFormModule { }
