import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { WzForm } from './wz-form';

@Injectable({
  providedIn: 'root'
})
export class WzFormService {

  constructor() { }

  toFormGroup(form: WzForm): FormGroup {
    const group: any = {};

    let fields = form.fields;

    for (let name in fields) {
      let field = fields[name];
      if (field.type == 'CHECKBOX') {
        group[field.key] = new FormArray([]);
        field.options.forEach(option => {
          group[field.key].push(new FormControl(option['checked']));
        });
      } else
        group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
          : new FormControl(field.value || '');
    }
    return new FormGroup(group);
  }

  withLayout(form: WzForm,layout: any){
    let fields = form.fields;
    let boxes = layout.boxes;
    let results : any = [];
    let i = 0;
    for (let name in fields) {
      let field = fields[name];
      results[i] = {box : boxes[name],field : fields[name]};
      i++;
    }
    return results;  
  }
}
