import { Component, OnInit } from '@angular/core';
import { AlertService } from 'projects/acshb-common/src/lib/alert/services/alert.service';
import { FormElement, FormElementTypes } from 'projects/acshb-common/src/lib/form/models/form.model';
import { SidebarService } from './services/sidebar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalOpen = false;
  formElements: FormElement[];
  sidebarToggled = true;

  constructor(
    private alertService: AlertService,
    private sidebarService: SidebarService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    this.formElements = [
      new FormElement({
        name: 'name',
        type: FormElementTypes.Text,
        required: true,
        minLength: 5,
        maxLength: 10,
        pattern: '[a-zA-Z ]*'
      }),
      new FormElement({ name: 'age', type: FormElementTypes.Number, min: 5, max: 10 }),
      new FormElement({ name: 'tckn', type: FormElementTypes.Tckn, required: true }),
      new FormElement({
        name: 'secim', type: FormElementTypes.Select, data: [
          { id: 0, label: 'Seçenek 1' },
          { id: 1, label: 'Seçenek 2' }
        ], required: true
      }),
      new FormElement({
        name: 'coklusecim', type: FormElementTypes.MultiSelect, data: [
          { id: 0, label: 'Seçenek 1' },
          { id: 1, label: 'Seçenek 2' },
          { id: 2, label: 'Seçenek 3' }
        ], required: true
      }),
      new FormElement({ name: 'date', type: FormElementTypes.Date, required: true }),
      new FormElement({ name: 'remember', type: FormElementTypes.Checkbox, label: 'Beni Hatırla' })
    ];

    console.log(this);

  }

  onSidebarLinkClicked(link) {
    this.router.navigate(link.url);
    console.log(link);
  }

  onSubmit(form) {
    console.log(form);
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
    this.sidebarToggled = !this.sidebarService.open;
    this.sidebarService.toggleSidebar(this.sidebarToggled);
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

  onModalOpen() {
    this.modalOpen = true;
  }
}
