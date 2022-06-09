import { Component} from '@angular/core';
import { WzFormComponent } from '../wz-form.component';

@Component({
  selector: 'pwz-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent extends WzFormComponent {
  arrange : string = 'vertical';
  isShowButtons : boolean = false;
  override ngOnInit(): void {
      super.ngOnInit();
      let others = this.props.others;
      this.isShowButtons = others?.showButtons;
      if(this.isShowButtons){ 
         this.arrange = others?.arrange;
      }   
  }
}

