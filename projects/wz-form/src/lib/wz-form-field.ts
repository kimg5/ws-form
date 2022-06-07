export class WzFormField {
    value: any;
    key: string;
    label: string;
    labelStyle: string;
    required: boolean;
    selection: string;
    type: string;
    options: Record<string,any>[];
    others?:any;
    
    constructor(options: {
        value?: any;
        key?: string;
        label?: string;
        labelStyle?: string;
        required?: boolean;
        selection?: string;
        type?: string;
        options?: Record<string,any>[];
        others?: any;
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.labelStyle = options.labelStyle || 'FLOAT'
        this.required = !!options.required;
        this.selection = options.selection || '';
        this.type = options.type || '';
        this.options = options.options || [];
        this.others = options.others;
    }
}
