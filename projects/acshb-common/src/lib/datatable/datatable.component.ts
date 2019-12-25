import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'acshb-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit, OnChanges {
  @Input() data: Array<any> = [];
  @Input() columns: Array<any> = [];
  @Input() search: false;
  @Input() itemsPerPage = 1;
  @Input() classNames = '';
  config;
  rows;
  page = 1;
  maxSize = 5;
  numPages = 1;
  length = 0;

  constructor() {
    this.config = {
      paging: true,
      sorting: {columns: this.columns},
      filtering: {filterString: ''},
      className: this.classNames
    };
    this.length = this.data.length;
   }

  ngOnInit() {
    this.config.sorting = {columns: this.columns};
    this.onChangeTable(this.config);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.config.sorting = {columns: this.columns};
    this.config.className = this.classNames;
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
    let columnName;
    let sort;

    for (const col of columns) {
      if (col.sort !== '' && col.sort !== false) {
        columnName = col.name;
        sort = col.sort;
      }
    }

    if (!columnName) {
      return data;
    }

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
}
