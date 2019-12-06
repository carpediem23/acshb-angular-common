import { Component, OnInit } from '@angular/core';
import { AlertService } from 'projects/acshb-common/src/lib/alert/alert.service';
import { FormElement, FormElementTypes } from '../form/form-element/form-element.model';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss']
})
export class TestViewComponent implements OnInit {
  modalOpen: boolean = false;
  formElements: FormElement[];

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.formElements = [
      new FormElement({name: 'name', key: 'name', type: FormElementTypes.Text, required: true}),
      new FormElement({name: 'age', key: 'age', type: FormElementTypes.Number})
    ];
   }

  onClicked(e: MouseEvent) {
    alert(e);
  }

  onSelected(d) {
    console.log(d);
  }

  onAlertSuccess() {
    this.alertService.success('İşlem başarıyla gerçekleşti.', 'Başlık', true, '0');
  }

  onAlertInfo() {
    this.alertService.info('İşlem yapınız.', 'Başlık', true, '0');
  }

  onAlertWarning() {
    this.alertService.warning('İşlem başarıyla gerçekleşti, ancak hatalar meydana geldi.', 'Başlık', false, '0');
  }

  onAlertError() {
    this.alertService.error('İşlem yapılırken hata meydana geldi', 'Başlık', false, '0');
  }

  onMenuToggle() {
    console.log('menu toggled');
  }

  onModalSubmit() {
    this.modalOpen = false;
    console.log('on modal submit');
  }

  onModalClose() {
    this.modalOpen = false;
    console.log('on modal close');
  }
}
