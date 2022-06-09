import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WzForm } from 'projects/wz-form/src/lib/wz-form';
import { WzFormService } from 'projects/wz-form/src/public-api';
import { DynamicFormService } from './dynamic-form.service';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  group!: FormGroup;
  layout!: any;
  items!: any;
  payLoad: any;

  constructor(private service: WzFormService, private dservice: DynamicFormService, private lservice: LayoutService) {
  }

  ngOnInit(): void {
    this.layout = this.lservice.getData();
    let wform: WzForm = WzForm.fromJson(this.dservice.getJsonData());
    this.group = this.service.toFormGroup(wform);
    this.items = this.service.withLayout(wform, this.layout);
  }

  onSubmit() {
    console.log('onSubmit');
    this.payLoad = JSON.stringify(this.group.getRawValue());
  }

}
