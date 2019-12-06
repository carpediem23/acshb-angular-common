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
    isTckn?: boolean;
    col?: number;

    constructor( options: {
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
        isTckn?: boolean,
        col?: number
    }) {
        this.key = options.key || '';
        this.name = options.name || '';
        this.type = options.type || FormElementTypes.Text;
        this.label = options.label || null;
        this.required = options.required || null;
        this.min = options.min || null;
        this.max = options.max || null;
        this.minLength = options.minLength || null;
        this.maxLength = options.maxLength || null;
        this.isTckn = options.isTckn || null;
        this.col = options.col || null;

        switch (options.type || FormElementTypes.Text) {
            case FormElementTypes.Text:
                this.defaultValue = options.defaultValue || '';
                break;
            case FormElementTypes.Number:
                    this.defaultValue = options.defaultValue || 0;
                break;
            case FormElementTypes.Dropdown:
                    this.defaultValue = options.defaultValue || [];
                break;
            default:
                break;
        }
    }
}

export interface IFormElement {
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
    isTckn?: boolean,
    col?: number
}

export enum FormElementTypes {
    Text = 'text',
    Dropdown = 'dropdown',
    Number = 'number'
}
