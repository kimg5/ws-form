import { Component} from '@angular/core';
import { WzFormComponent } from '../wz-form.component';

@Component({
  selector: 'pwz-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent extends WzFormComponent {

  fctrls: any;
  checkboxClass : string = "field-checkbox";
  
  override ngOnInit(): void {
    super.ngOnInit();
    this.fctrls = this.group.get(this.props.key);
    if(this.others['arrange'] != 'vertical')
      this.checkboxClass = "";
  }
}
