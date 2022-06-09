import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  jsonData = `{
    "title":"demo_title",
    "name": "demo",
    "style": {
      "display": "grid",
      "grid-template-columns": "1fr 1fr 1fr 1f",
      "grid-template-rows": "1f 1f 1f 1f 1f 1f 1f",
      "grid-gap": "5px 5px",
      "place-items": "center start",
      "place-content": "center start"
    },
    "boxes": {
      "f1":
      {
        "grid-area": "1 / 1 / 1 / 1",
        "place-self": "center start"
      },
      "f2":
      {
        "grid-area": "1 / 2 / 1 / 2",
        "place-self": "center start"
      },
      "f3":
      {
        "grid-area": "1 / 3 / 1 / 3",
        "place-self": "center start"
       },
       "f4":
       {
        "grid-area": "1 / 4 / 1 / 4",
        "place-self": "center start"
       },
       "f5":
       {
        "grid-area": "2 / 1 / 2 / 1",
        "place-self": "center start"
       },
       "f6":
       {
        "grid-area": "2 / 2 / 2 / 2",
        "place-self": "center start"
       },
       "f7":
       {
        "grid-area": "2 / 3 / 2 / 3",
        "place-self": "center start"
       },
      "f8":
      {
        "grid-area": "2 / 4 / 2 / 4",
        "place-self": "center start"  
      },
      "f9":
      {
        "grid-area": "3 / 1 / 3 / 1",
        "place-self": "center start"
      },
      "f10":
      {
        "grid-area": "3 / 2 / 3 / 2",
        "place-self": "center start"
      },
      "f11":
      {
        "grid-area": "3 / 3 / 3 / 3",
        "place-self": "center start"
      },
      "f12":
      {
        "grid-area": "3 / 4 / 3 / 4",
        "place-self": "center start"
      },
      "f13":
      {
        "grid-area": "4 / 1 / 4 / 1",
        "place-self": "center start"
      },
       "f14":
       {
        "grid-area": "4 / 2 / 4 / 2",
        "place-self": "center start"
       },
       "f15":
       {
        "grid-area": "4 / 3 / 4 / 3",
        "place-self": "center start"
       },
       "f16":
       {
        "grid-area": "4 / 4 / 4 / 4",
        "place-self": "center start"
       },
       "f17":
       {
        "grid-area": "5 / 1 / 5 / 1",
        "place-self": "center start"
       },
       "f18":
       {
        "grid-area": "5 / 2 / 5 / 2",
        "place-self": "center start"
       },
       "f19":
       {
        "grid-area": "5 / 3 / 5 / 3",
        "place-self": "center start"
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

}
