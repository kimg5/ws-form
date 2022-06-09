import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WzFormField } from './wz-form-field';

@Component({
  selector: 'wz-form',
  template: ``,
  styles: []
})
export class WzFormComponent implements OnInit{
  @Input() props!: WzFormField;
  @Input() group!: FormGroup;

  others? : any;
  
  constructor() {
  }

  ngOnInit(): void {
     this.others = this.props.others;
  }
}
