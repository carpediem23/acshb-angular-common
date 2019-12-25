import { Component, OnInit } from '@angular/core';
import {
  FormElement,
  FormElementTypes
} from 'projects/acshb-common/src/lib/form/models/form.model';

@Component({
  selector: 'app-forms-view',
  templateUrl: './forms-view.component.html',
  styleUrls: ['./forms-view.component.scss']
})
export class FormsViewComponent implements OnInit {
  formElements: FormElement[];

  constructor() {}

  ngOnInit() {
    this.formElements = [
      new FormElement({
        name: 'name',
        type: FormElementTypes.Text,
        required: true,
        minLength: 1,
        maxLength: 64,
        label: 'İsminiz',
        placeholder: 'İsim',
        col: 4
      }),
      new FormElement({
        name: 'lastname',
        type: FormElementTypes.Text,
        required: true,
        minLength: 1,
        maxLength: 64,
        label: 'Soyadı',
        placeholder: 'Soyadınız',
        col: 4
      }),
      new FormElement({
        name: 'pattern',
        type: FormElementTypes.Text,
        pattern: '[a-zA-Z ]*',
        label: 'Pattern',
        placeholder: 'Yanlızca harfler',
        col: 4
      }),
      new FormElement({
        name: 'age',
        type: FormElementTypes.Number,
        min: 18,
        max: 200,
        required: true,
        label: 'Yaş',
        placeholder: 'Yaşınız',
        col: 6
      }),
      new FormElement({
        name: 'tckn',
        type: FormElementTypes.Tckn,
        required: true,
        placeholder: 'T.C. Kimlik Numaranız',
        label: 'T.C. Kimlik Numaranız',
        col: 6
      }),
      new FormElement({
        name: 'choice',
        type: FormElementTypes.Select,
        data: [
          { id: 0, label: 'Seçenek 1' },
          { id: 1, label: 'Seçenek 2' }
        ],
        required: true,
        label: 'Seçiniz',
        placeholder: 'Seçiniz'
      }),
      new FormElement({
        name: 'multichoice',
        type: FormElementTypes.MultiSelect,
        data: [
          { id: 0, label: 'Seçenek 1' },
          { id: 1, label: 'Seçenek 2' },
          { id: 2, label: 'Seçenek 3' }
        ],
        required: true,
        label: 'Çoklu Seçiniz',
        placeholder: 'Çoklu Seçiniz'
      }),
      new FormElement({
        name: 'date',
        type: FormElementTypes.Date,
        label: 'Doğum Günü'
      }),
      new FormElement({
        name: 'remember',
        type: FormElementTypes.Checkbox,
        label: 'Beni Hatırla'
      })
    ];
  }

  onSubmit(form) {
    console.log(form);
  }
}
