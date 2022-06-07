import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PRIMENG_FORM_FIELDS } from '../primeng-form-collection';
import { WzFormField } from '../wz-form-field';

@Component({
  selector: 'pwz-form-item-slot',
  templateUrl: './form-field-slot.component.html',
  styleUrls: ['./form-field-slot.component.css']
})
export class FormFieldSlotComponent implements OnInit,AfterViewInit{

  @ViewChild("container", { read: ViewContainerRef }) container!: ViewContainerRef;

  @Input() props!: WzFormField;
  @Input() group!: FormGroup;

  constructor() { 
  }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadComponent();    
  }

  loadComponent() {
     this.container.clear();
     const cmp = this.container.createComponent<any>(PRIMENG_FORM_FIELDS.get(this.props.type));
     cmp.instance.props = this.props;
     cmp.instance.group = this.group;
  }
  
  get isValid() { return this.group.controls[this.props.key].valid; }

}