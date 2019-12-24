export class FormElement implements IFormElement {
    name: string;
    type: string;
    defaultValue?: any;
    label?: string;
    required?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    isTckn?: boolean;
    data?: Array<any>;
    col?: number;
    placeholder?: string;

    constructor(options: {
        name: string,
        type: string,
        defaultValue?: any,
        label?: string,
        required?: boolean,
        min?: number,
        max?: number,
        minLength?: number,
        maxLength?: number,
        pattern?: string,
        isTckn?: boolean,
        data?: Array<any>,
        col?: number,
        placeholder?: string;
    }) {
        this.name = options.name || '';
        this.type = options.type || FormElementTypes.Text;
        this.label = options.label || this.name;
        this.required = options.required || undefined;
        this.min = options.min || undefined;
        this.max = options.max || undefined;
        this.minLength = options.minLength || undefined;
        this.maxLength = options.maxLength || undefined;
        this.pattern = options.pattern || undefined;
        this.isTckn = options.isTckn || undefined;
        this.data = options.data || undefined;
        this.col = options.col || 12;
        this.placeholder = options.placeholder || undefined;

        switch (options.type || FormElementTypes.Text) {
            case FormElementTypes.Text:
                this.defaultValue = options.defaultValue || '';
                break;
            case FormElementTypes.Tckn:
                this.defaultValue = options.defaultValue || '';
                break;
            case FormElementTypes.Number:
                this.defaultValue = options.defaultValue || 0;
                break;
            case FormElementTypes.Select:
            case FormElementTypes.MultiSelect:
                this.defaultValue = options.defaultValue || (this.data ? this.data : []);
                break;
            case FormElementTypes.Checkbox:
                this.defaultValue = options.defaultValue || false;
                break;
            case FormElementTypes.Date:
                this.defaultValue = options.defaultValue ? options.defaultValue.toISOString().substring(0, 10) : null;
                break;
            default:
                this.defaultValue = options.defaultValue || '';
                break;
        }
    }
}

export interface IFormElement {
    name: string;
    type: string;
    defaultValue?: any;
    label?: string;
    required?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    isTckn?: boolean;
    data?: Array<any>;
    col?: number;
    placeholder?: string;
}

export enum FormElementTypes {
    Text = 'text',
    Tckn = 'tckn',
    Select = 'select',
    MultiSelect = 'multiselect',
    Number = 'number',
    Checkbox = 'checkbox',
    Date = 'date'
}
