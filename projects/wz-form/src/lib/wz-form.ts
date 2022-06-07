import { WzFormField } from "./wz-form-field";

export class WzForm {
    name?: string;
    title?: string;
    fields!: Record<string, WzFormField>;

    constructor() {
        this.name = "";
        this.fields = {};
    }

   /*
    * If using this method to create the WzForm, the method defined in this class can not be used
    */
    static fromJson(jsonStr: string): WzForm {
        let form: WzForm = JSON.parse(jsonStr);
        return form;
    }
}