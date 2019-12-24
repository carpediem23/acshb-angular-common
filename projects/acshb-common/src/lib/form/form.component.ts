import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormElement, FormElementTypes } from './models/form.model';
import { isValidTckn } from './directives/tckn.validation';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'acshb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnChanges {
  @Input() submitText: string;
  @Input() formElements: FormElement[];
  @Output() submitCallback: EventEmitter<any>;
  formGroup: FormGroup;
  types = FormElementTypes;
  selectedItems;

  constructor(private formBuilder: FormBuilder, private config: NgSelectConfig) {
    this.config.notFoundText = 'Sonuç bulunamadı';
    this.config.clearAllText = 'Hepsini sil';
    this.config.typeToSearchText = 'Arayın';
    this.config.bindValue = 'id';
    this.submitCallback = new EventEmitter<any>();
    this.formGroup = this.formBuilder.group(this.setFormGroup(this.formElements));
  }

  ngOnChanges() {
    this.formGroup = this.formBuilder.group(this.setFormGroup(this.formElements));
  }

  onSubmit(e, form) {
    if (this.submitCallback) {
      this.submitCallback.emit(form.value);
    }
  }

  setFormGroup(elements: FormElement[]) {
    const formObject = {};

    if (elements) {
      elements.map(e => {
        const validations = [];

        if (e.required) { validations.push(Validators.required); }
        if (e.minLength) { validations.push(Validators.minLength(e.minLength)); }
        if (e.maxLength) { validations.push(Validators.maxLength(e.maxLength)); }
        if (e.min) { validations.push(Validators.min(e.min)); }
        if (e.max) { validations.push(Validators.max(e.max)); }
        if (e.type === FormElementTypes.Tckn) { validations.push(isValidTckn); }

        formObject[e.name] = new FormControl(e.defaultValue, validations);
        return null;
      });
    }

    return formObject;
  }
}
