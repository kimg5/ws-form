import { Component } from '@angular/core';
import { WzFormComponent } from '../wz-form.component';

@Component({
  selector: 'pwz-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent extends WzFormComponent {
  fctrls: any;
  checkboxClass : string = "field-checkbox";

  override ngOnInit(): void {
    super.ngOnInit();
    this.fctrls = this.group.get(this.props.key);
    if(this.others['arrange'] != 'vertical')
      this.checkboxClass = "";
  }
}
