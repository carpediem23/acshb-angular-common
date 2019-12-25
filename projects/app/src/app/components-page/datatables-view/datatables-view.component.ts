import { Component } from '@angular/core';

@Component({
  selector: 'app-datatables-view',
  templateUrl: './datatables-view.component.html',
  styleUrls: ['./datatables-view.component.scss']
})
export class DatatablesViewComponent {
  columns;
  data;

  constructor() {
    this.columns = [
      {
        title: 'İsim',
        name: 'name',
        filtering: { filterString: '', placeholder: 'Filter by position' },
        sort: 'asc'
      },
      { title: 'Departman', name: 'position' },
      { title: 'Ofis', name: 'office' }
    ];
    this.data = [
      { name: 'Alptuğ', position: 'Pozisyon A', office: 'Ofis 1' },
      { name: 'Osman', position: 'Pozisyon B', office: 'Ofis 2' },
      { name: 'Osman', position: 'Pozisyon B', office: 'Ofis 2' },
      { name: 'Osman', position: 'Pozisyon B', office: 'Ofis 2' },
      { name: 'Osman', position: 'Pozisyon B', office: 'Ofis 2' }
    ];
  }
}
