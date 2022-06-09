import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  jsonData = `{
    "title":"demo_title",
    "name": "demo",
    "fields": {
      "f1":
      {
        "value": "kim2ee",
        "key": "username",
        "label": "Username",
        "labelStyle": "FLOAT",
        "required": true,
        "type": "INPUTTEXT"
      },
      "f2":
      {
        "value": "Piao",
        "key": "familyname",
        "label": "Last Name",
        "labelStyle": "FLOAT",
        "required": true,
        "type": "INPUTTEXT"
      },
      "f3":
      {
        "value": "20",
        "key": "age",
        "label": "Age",
        "labelStyle": "FLOAT",
        "required": true,
        "type": "INPUTTEXT"
       },
       "f4":
       {
        "value": "5149146978",
        "key": "phone",
        "label": "Phone",
        "labelStyle": "FLOAT",
        "required": true,
        "type": "INPUTMASK",
        "others":{
          "mask":"999-999-9999"
        }
       },
       "f5":
       {
        "value": true,
        "key": "marriage",
        "label": "Marriage",
        "labelStyle": "LEFT",
        "required": true,
        "type": "INPUTSWITCH"
       },
       "f6":
       {
        "value": "",
        "key": "birthday",
        "label": "Birthday",
        "labelStyle": "FLOAT",
        "required": false,
        "type": "CALENDAR"
       },
       "f7":
       {
          "key": "sex",
          "label": "Sex",
          "required": true,
          "options":[
            {
              "value":"MALE",
              "label":"Male",
              "checked":true
            },
            {
              "value":"FEMALE",
              "label":"Female",
              "checked":false
            },
            {
              "value":"UNKNOWN",
              "label":"Unkown",
              "checked":false
            }
          ],
          "type": "CHECKBOX",
          "others" : {
            "arrange": "horizon"
          } 
      },
      "f8":
      {
        "key": "nation",
        "value":"CN",
        "label": "Nation",
        "labelStyle": "LEFT",
        "required": true,
        "options":[
          {"label": "Australia", "value": "AU"},
          {"label": "Brazil", "value": "BR"},
          {"label": "China", "value": "CN"},
          {"label": "Egypt", "value": "EG"},
          {"label": "France", "value": "FR"},
          {"label": "Germany", "value": "DE"},
          {"label": "India", "value": "IN"},
          {"label": "Japan", "value": "JP"},
          {"label": "Spain", "value": "ES"},
          {"label": "United States", "value": "US"}
        ],
        "type": "DROPDOWN",
        "others" : {
          "showclear":true,
          "editable":true
        }  
    },
    "f9":
    {
      "key": "description",
      "value":"",
      "label": "Description",
      "labelStyle": "FLOAT",
      "required": false,
      "type": "INPUTTEXTAREA"
     },
     "f10":
     {
      "key": "score",
      "value":80,
      "label": "Score",
      "labelStyle": "UP",
      "required": false,
      "type": "SLIDER",
      "others" : {
        "min": 0,
        "max":100,
        "step":1,
        "orientation":"horizontal",
        "range":false,
        "width":"200px"
      }   
     },
     "f11":
     {
      "key": "rating",
      "value":4,
      "label": "Rating",
      "labelStyle": "UP",
      "required": false,
      "type": "RATING",
      "others" : {
        "stars": 5,
        "cancel":false
      }   
     },
     "f12":
     {
      "key": "knob",
      "value":40,
      "label": "Knob",
      "labelStyle": "UP",
      "required": false,
      "type": "KNOB",
       "others" : {
          "min": 0,
          "max":100,
          "step":1
       }   
     },
     "f13":
     {
      "key": "password",
      "value":"",
      "label": "Password",
      "labelStyle": "FLOAT",
      "required": false,
      "type": "PASSWORD"
     },
     "f14":
     {
      "key": "radio",
      "value":"ACCOUNT",
      "label": "Radio",
      "labelStyle": "UP",
      "required": false,
      "type": "RADIO",
       "options":[
        {
          "label":"Accounting",
          "value":"ACCOUNT"
        },
        {
          "label":"Marketing",
          "value":"MARKET"
        },
        {
          "label":"Production",
          "value":"PRODUCT"
        },
        {
          "label":"Research",
          "value":"RESEARCH"
        }
      ],
      "others" : {
        "arrange": "vertical"
      }    
     },
     "f15":
     {
      "key": "multiselect",
      "value":["LDN","PRS"],
      "label": "Multi Select",
      "labelStyle": "UP",
      "required": false,
      "type": "MULTISELECT",
       "options":[
        {
          "label":"New York",
          "value":"NY",
          "inactive":false
        },
        {
          "label":"Rome",
          "value":"RM",
          "inactive":true
        },
        {
          "label":"London",
          "value":"LDN",
          "inactive":false
        },
        {
          "label":"Istanbul",
          "value":"IST",
          "inactive":false
        },
        {
          "label":"Paris",
          "value":"PRS",
          "inactive":false
        }
      ]    
     },
     "f16":
     {
      "key": "chips",
      "value":["LDN","PRS"],
      "label": "Chips",
      "labelStyle": "FLOAT",
      "required": false,
      "type": "CHIPS"
     },
     "f17":
     {
      "key": "colorpicker",
      "value":"",
      "label": "Color Picker",
      "labelStyle": "UP",
      "required": false,
      "type": "COLORPICKER"
     },
     "f18":
     {
      "key": "inputnumber",
      "value":"8",
      "label": "Input Number",
      "labelStyle": "UP",
      "required": false,
      "type": "INPUTNUMBER",
       "others" : {
        "arrange": "vertical",
        "showButtons": true
      } 
     },
     "f19":
     {
      "key": "listbox",
      "value":[],
      "label": "List Box",
      "labelStyle": "UP",
      "required": false,
      "type": "LISTBOX",
       "options":[
        {
          "label":"New York",
          "value":"NY"
        },
        {
          "label":"Rome",
          "value":"RM"
        },
        {
          "label":"London",
          "value":"LDN"
        },
        {
          "label":"Istanbul",
          "value":"IST"
        },
        {
          "label":"Paris",
          "value":"PRS"
        }
      ]    
     }
    }
  }` ;

  data: any;

  constructor() {
    this.data = JSON.parse(this.jsonData);
    //  let fs = this.data.fields;
    //  fs.sort((a,b) =>  a.order - b.order);
  }
  getData(){
    return this.data;
  }

  getJsonData(){
    return this.jsonData;
  }

}
