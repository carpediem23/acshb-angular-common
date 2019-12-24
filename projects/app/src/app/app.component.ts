import { Component, OnInit } from '@angular/core';
import { AlertService } from 'projects/acshb-common/src/lib/alert/services/alert.service';
import { FormElement, FormElementTypes } from 'projects/acshb-common/src/lib/form/models/form.model';
import { SidebarService } from './services/sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalOpen;
  formElements;
  sidebarToggled;
  routes;

  constructor(
    private alertService: AlertService,
    private sidebarService: SidebarService,
    private router: Router
    ) {
        this.modalOpen = false;
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
        this.sidebarToggled = true;
        this.routes = [
          {
            id: 0,
            name: 'home',
            title: 'Ana Sayfa',
            url: '/',
            icon: 'faHome'
          },
          { id: 1, name: 'test', title: 'Test', url: '/test', icon: 'faVial' },
          {
            id: 1,
            name: 'link1',
            title: 'Komponentler',
            url: '/components',
            icon: 'faBezierCurve',
            children: [
              { id: 11, name: 'buttons', title: 'Buttons', url: '/components/buttons' },
              { id: 12, name: 'frames', title: 'Frames', url: '/components/frames' },
              { id: 13, name: 'icons', title: 'Icons', url: '/components/icons' },
              { id: 14, name: 'accordions', title: 'Accordions', url: '/components/accordions' },
              { id: 15, name: 'dropdowns', title: 'Dropdowns', url: '/components/dropdowns' },
              { id: 16, name: 'alerts', title: 'Alerts', url: '/components/alerts' },
              { id: 17, name: 'modals', title: 'Modals', url: '/components/modals' },
              { id: 17, name: 'forms', title: 'Forms', url: '/components/forms' }
            ]
          }
        ];
    }

  ngOnInit() {}

  onSidebarLinkClicked(link) {
    this.router.navigate([link.url]);
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
