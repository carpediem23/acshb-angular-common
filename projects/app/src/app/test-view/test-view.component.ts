import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertService } from 'projects/acshb-common/src/lib/alert/services/alert.service';
import { FormElement, FormElementTypes } from 'projects/acshb-common/src/lib/form/models/form.model';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestViewComponent implements OnInit {
  modalOpen = false;
  formElements: FormElement[];
  config;
  data = [
    {name: 'Alptuğ', position: 'Pozisyon A', office: 'Ofis 1'},
    {name: 'Osman', position: 'Pozisyon B', office: 'Ofis 2'}
  ];
  rows;
  columns;
  public page = 1;
  public itemsPerPage = 1;
  public maxSize = 5;
  public numPages = 1;
  public length = 0;

  constructor(private alertService: AlertService) {
    this.config = {
      paging: true,
      sorting: {columns: this.columns},
      filtering: {filterString: ''},
      className: ['table-responsive', 'table-bordered']
    };
    this.columns = [
      {title: 'Name', name: 'name'},
      {title: 'Position', name: 'position', sort: true},
      {title: 'Office', name: 'office', sort: 'asc'}
    ];
    this.length = this.data.length;
  }

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
      new FormElement({ name: 'secim', type: FormElementTypes.Select, data: [
        { id: 0, label: 'Seçenek 1' },
        { id: 1, label: 'Seçenek 2' }
      ], required: true }),
      new FormElement({ name: 'coklusecim', type: FormElementTypes.MultiSelect, data: [
        { id: 0, label: 'Seçenek 1' },
        { id: 1, label: 'Seçenek 2' },
        { id: 2, label: 'Seçenek 3' }
      ], required: true }),
      new FormElement({ name: 'date', type: FormElementTypes.Date, required: true }),
      new FormElement({ name: 'remember', type: FormElementTypes.Checkbox, label: 'Beni Hatırla' })
    ];
    this.onChangeTable(this.config);
  }

  changePage(page, data = this.data) {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  changeSort(data, config) {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName = void 0;
    let sort = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous, current) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  changeFilter(data, config) {
    let filteredData = data;
    this.columns.forEach((column) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    const tempArray = [];
    filteredData.forEach((item) => {
      let flag = false;
      this.columns.forEach((column) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  onChangeTable(config, page = {page: this.page, itemsPerPage: this.itemsPerPage}) {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  onCellClick(data: any): any {
    console.log(data);
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
