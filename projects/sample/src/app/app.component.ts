import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CssGridLayout } from 'layout';
import { WzForm } from 'projects/wz-form/src/lib/wz-form';
import { WzFormField } from 'projects/wz-form/src/lib/wz-form-field';
import { WzFormService } from 'projects/wz-form/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  parentContainer: Record<string, string>;
  parentHeader: Record<string, string>;
  parentMain1: Record<string, string>;
  parentMain2: Record<string, string>;
  parentFooter: Record<string, string>;

  child1Layout: CssGridLayout;
  child2Layout: CssGridLayout;

  group! : FormGroup;
  payLoad:any;

  constructor(private service : WzFormService) {
    this.parentContainer = {
      "display": "grid",
      "grid-template-rows": "1fr 8fr 1fr",
      "grid-template-columns": "1fr 1fr 1fr"
    };
    this.parentHeader = { "grid-row": "1/1", "grid-column": "1/span 2" };
    this.parentMain1 = { "grid-row": "2/2", "grid-column": "1/span 2" };
    this.parentMain2 = { "grid-row": "1/span 2", "grid-column": "3/3" };
    this.parentFooter = { "grid-row": "3/3", "grid-column": "1/span 3" };

    this.child1Layout = new CssGridLayout();
    this.child2Layout = new CssGridLayout();

  }

  ngOnInit(): void {
     this.child1Layout.setArea("1fr 1fr", "1fr 1fr").setGap("2px", "2px").placeContainer("stretch","stretch").setItemArea("child1",1,2,1,2);

     this.child2Layout.setArea("1fr 1fr 1fr 1fr", "1fr 1fr").setGap("2px","2px");

     this.child2Layout.addBox("child2",{"grid-area":"1/1/span 2/span 2","place-self":"stretch stretch"});
     
     this.child2Layout.addBox("child3",{});
     this.child2Layout.setItemArea("child3",3,4,1,1);

     this.child2Layout.addBox("child4",{});
     this.child2Layout.setItemArea("child4",3,4,2,2);

     /*
     let form = new WzForm();

     form.name = "aform";
     form.title = "atitle";

     let field : WzFormField =  new WzFormField({
      "value": "kim2ee",
      "key": "username",
      "label": "Username",
      "labelStyle": "FLOAT",
      "required": true,
      "type": "INPUTTEXT",
    });

     form.fields["header"] = field;

     field = new WzFormField({
      "value": "20",
      "key": "age",
      "label": "Age",
      "labelStyle": "FLOAT",
      "required": true,
      "type": "INPUTTEXT",
     });

     form.fields["body"] = field;

     this.group = this.service.toFormGroup(form)


     let field1 = form.fields["header"];

    console.log(field1)
    */

     let jsonStr : string= 
     `{
        "name" : "wzform",
        "title" : "atitle",
        "fields" : 
        {
        "header" : 
          {
            "value": "kim2ee",
            "key": "username",
            "label": "Username",
             "labelStyle": "FLOAT",
             "required": true,
             "type": "INPUTTEXT"
          },
        "footer":
          {
            "value": "20",
            "key": "age",
            "label": "Age",
            "labelStyle": "FLOAT",
            "required": true,
            "type": "INPUTTEXT"
          }
        }  
       }`;

       let wform : WzForm= WzForm.fromJson(jsonStr);
       this.service.toFormGroup(wform);

  }

  onSubmit(){
    console.log('onSubmit');
    this.payLoad = JSON.stringify(this.group.getRawValue());
  }

}
