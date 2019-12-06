import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormElement, FormElementTypes } from './form-element/form-element.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formElements: FormElement[];
  formGroup: FormGroup;
  types = FormElementTypes;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(this.setFormGroup(this.formElements));
  }

  ngOnChanges(changes: SimpleChanges) {}

  setFormGroup(elements: FormElement[]) {
    const formObject = {};

    elements.map(e => {
      formObject[e.name] = [e.defaultValue, e.required ? Validators.required : null];
      return null;
    });

    return formObject;
  }
}
