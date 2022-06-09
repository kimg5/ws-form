import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WZ_FORM_MAP } from './wz-form-collection';
import { WzFormField } from './wz-form-field';

@Component({
  selector: 'wz-form-item-slot',
  template: '<ng-template #container></ng-template>',
  styles: []
})
export class FormFieldSlotComponent implements OnInit,AfterViewInit{

  @ViewChild("container", { read: ViewContainerRef }) container!: ViewContainerRef;

  @Input() props!: WzFormField;
  @Input() group!: FormGroup;

  constructor(private cd: ChangeDetectorRef) { 
  }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadComponent();  
    //Forcing the detect change in order to avoid the ExpressionChangedAfterItHasBeenCheckedError in development mode
    this.cd.detectChanges();  
  }

  loadComponent() {
     this.container.clear();
     const cmp = this.container.createComponent<any>(WZ_FORM_MAP.get(this.props.type));
     cmp.instance.props = this.props;
     cmp.instance.group = this.group;
  }
  
  get isValid() { return this.group.controls[this.props.key].valid; }

}