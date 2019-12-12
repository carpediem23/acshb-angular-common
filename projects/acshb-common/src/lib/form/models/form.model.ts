export class FormElement implements IFormElement {
    key: string;
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
    col?: number;

    constructor(options: {
        key: string,
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
        col?: number
    }) {
        this.key = options.key || '';
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
        this.col = options.col || 12;

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
            case FormElementTypes.Dropdown:
                this.defaultValue = options.defaultValue || [];
                break;
            case FormElementTypes.Checkbox:
                this.defaultValue = options.defaultValue || false;
                break;
            default:
                this.defaultValue = options.defaultValue || '';
                break;
        }
    }
}

export interface IFormElement {
    key: string;
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
    col?: number;
}

export enum FormElementTypes {
    Text = 'text',
    Tckn = 'tckn',
    Dropdown = 'dropdown',
    Number = 'number',
    Checkbox = 'checkbox'
}
